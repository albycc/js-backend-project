/*
File: createuser.js
Author: Richard Walton
*/

import express from 'express';
import db from '../db/connect.js'
import { ObjectId } from '../db/connect.js';
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
    // const usersGames = Array.isArray(newuser.games) ? newuser.games : typeof newuser.games !== 'undefined' ? [newuser.games] : [];
    // newuser.games = usersGames;

    await gamersCollection.updateOne({_id:ObjectId(req.params.id)}, {$set:newuser});

    res.redirect(`/user/${req.params.id}`)

    // gamer = await gamersCollection.findOne({_id: ObjectId(req.params.id)});
    // res.render('pages/user', {
    //     pagetitle:'User profile',
    //     ...gamer
    // })

})

export default router;