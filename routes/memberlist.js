/*
File: memberlist.js
Author: Richard Walton
*/

import express from "express";
import {MongoClient} from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
const db = client.db('jsbackend');

const router = express.Router();

router.get('/users', async (req, res) =>{
    const gamersCollection = db.collection('gamers');
    const gamers = await gamersCollection.find({}).toArray();
    console.log(gamers)
    const gamesOptions = gamers.map(g => g.games )
    console.log(gamesOptions)
    res.render('pages/memberlist', {
        pagetitle:'Memberlist',
        gamers
    })
})

export default router;