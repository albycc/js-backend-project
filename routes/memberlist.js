/*
File: memberlist.js
Author: Richard Walton
*/

import express from "express";
import db from '../db/connect.js'

const router = express.Router();

router.get('/users', async (req, res) =>{
    const gamersCollection = db.collection('gamers');
    const query = req.query;
    let sortparams = {}
    const queryFind = {};
    if(query.hasOwnProperty('search-name-field') && query['search-name-field'] !== ''){
        queryFind.name = query['search-name-field'];
    }
    if(query.hasOwnProperty('game')){
        queryFind.activegame = query.game
    }
    // const findname = query.hasOwnProperty('search-name-field') && query['search-name-field'] !== '' ? {name:query['search-name-field']} : {}

    //find sort value
    if(query.hasOwnProperty('sort')){
        sortparams.name = req.query.sort;
    }
    const gamers = await gamersCollection.find(queryFind).sort(sortparams).toArray();
    let gamesOptions = gamers.map(g =>  g.activegame ).filter(g => g !== undefined);
    gamesOptions = [...new Set(gamesOptions)].filter(g => g != '')

    res.render('pages/memberlist', {
        pagetitle:'Memberlist',
        gamers,
        gamesOptions
    })
})

export default router;