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
    const query = req.query;
    let sortparams = {}
    const findname = query.hasOwnProperty('search-name-field') && query['search-name-field'] !== '' ? {name:query['search-name-field']} : {}
    if(query.hasOwnProperty('ascending') || query.hasOwnProperty('descending')){
        sortparams.name = query.ascending === 'on' ? 1 : -1;
    }
    const gamers = await gamersCollection.find(findname).sort(sortparams).toArray();
    let gamesOptions = gamers.map(g =>  g.activegame ).filter(g => g !== undefined);
    gamesOptions = [...new Set(gamesOptions)]

    res.render('pages/memberlist', {
        pagetitle:'Memberlist',
        gamers,
        gamesOptions
    })
})

export default router;