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
    console.log(req.body)
    console.log(req.params.id)
    await gamersCollection.updateOne({_id:ObjectId(req.params.id)}, {$set:req.body});

    gamer = await gamersCollection.findOne({_id: ObjectId(req.params.id)});
    res.render('pages/user', {
        pagetitle:'User profile',
        ...gamer
    })

})

export default router;