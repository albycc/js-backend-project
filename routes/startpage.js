/*
File: startpage.js
Author: Richard Walton
*/

import express from "express";
import db from '../db/connect.js'
const gamersCollection = db.collection('gamers');


const router = express.Router();

router.get('/', async (req, res) =>{
    const gamers = await gamersCollection.find({}).toArray();
    const gamersCount = gamers.length;
    res.render('pages/startpage', {
        pagetitle:'Homepage',
        gamersCount
    })
})

export default router;