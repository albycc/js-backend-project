/*
File: userprofile.js
Author: Richard Walton
*/

import express from "express";
import {MongoClient, ObjectId} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
await client.connect();
const db = client.db('jsbackend')

const router = express.Router();

router.get('/user/:id', async (req, res) =>{
    const gamer = await db.collection('gamers').findOne({_id: ObjectId(req.params.id)});
    console.log(gamer)
    res.render('pages/user', {
        pagetitle:'User profile',
        ...gamer
    })
})

router.get('/deleteuser/:id', async(req, res) =>{
    const gamer = await db.collection('gamers').deleteOne({_id: ObjectId(req.params.id)})
    console.log('Deleting', gamer.name)
    res.render('pages/startpage', {
        pagetitle:'Homepage'
    })
})

export default router;