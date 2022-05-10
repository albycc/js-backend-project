/*
File: createuser.js
Author: Richard Walton
*/

import express from 'express';
import {MongoClient, ObjectId} from 'mongodb'

const client = new MongoClient('mongodb://127.0.0.1:27017')
await client.connect();
const db = client.db('jsbackend');
const gamersCollection = await db.collection('gamers');

let gamer;

const router = express.Router();

router.get('/user/:id/edit', async(req, res) =>{
    gamer = await gamersCollection.findOne({_id: ObjectId(req.params.id)});

    res.render('pages/edituser', {
        pagetitle:'Edit user',
        ...gamer
    })

})

router.post('/edituser/:id', async(req, res) =>{

    const newuser = req.body;
    const usersGames = Array.isArray(newuser.games) ? newuser.games : typeof newuser.games !== 'undefined' ? [newuser.games] : [];
    newuser.games = usersGames;

    console.log(newuser)

    await gamersCollection.updateOne({_id:ObjectId(req.params.id)}, {$set:newuser});

    gamer = await gamersCollection.findOne({_id: ObjectId(req.params.id)});
    res.render('pages/user', {
        pagetitle:'User profile',
        ...gamer
    })

})

export default router;