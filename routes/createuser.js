/*
File: createuser.js
Author: Richard Walton
*/

import express from "express";
import db from '../db/connect.js';
const gamersCollection = db.collection('gamers');


const router = express.Router();
router.use(express.urlencoded({extended:true}));

router.get('/users/register', (req, res) =>{
    res.render('pages/createuser', {
        pagetitle:'Register'
    })
})

router.post('/users/register', async (req, res) =>{
    console.log('post')
    
    const newuser = req.body;

    // const usersGames = Array.isArray(newuser.games) ? newuser.games : typeof newuser.games !== 'undefined' ? [newuser.games] : [];
    // newuser.games = usersGames;
    newuser.activegame = '';
    
    await gamersCollection.insertOne(newuser);
    res.redirect('/users/register')
})

export default router;