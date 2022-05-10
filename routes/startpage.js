/*
File: startpage.js
Author: Richard Walton
*/

import express from "express";
import {MongoClient} from 'mongodb';

const client = new MongoClient('mongodb://localhost:27017');
await client.connect();
const db = client.db('jsbackend');
const gamersCollection = db.collection('gamers');


const router = express.Router();

router.get('/', async (req, res) =>{
    const gamers = await gamersCollection.find({}).toArray();
    const gamersCount = gamers.length;
    console.log(gamersCount.length)
    res.render('pages/startpage', {
        pagetitle:'Homepage',
        gamersCount
    })
})

export default router;