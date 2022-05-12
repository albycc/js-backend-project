/*
File: userprofile.js
Author: Richard Walton
*/

import express from "express";
import {MongoClient, ObjectId} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
await client.connect();
const db = client.db('jsbackend')
const gamersCollection = db.collection('gamers');

const router = express.Router();

router.get('/user/:id', async (req, res) =>{
    const gamer = await gamersCollection.findOne({_id: ObjectId(req.params.id)});
    res.render('pages/user', {
        pagetitle:'User profile',
        ...gamer
    })
})

router.get('/user/:id/addgame/:game', async (req, res) =>{

    await gamersCollection.updateOne({_id: ObjectId(req.params.id)}, {$set:{activegame:req.params.game}});
    res.redirect(`/user/${req.params.id}`)

})

router.get('/deleteuser/:id', async(req, res) =>{
    const gamer = await gamersCollection.deleteOne({_id: ObjectId(req.params.id)})
    console.log('Deleting', gamer.name)
    res.redirect('/');
})

export default router;