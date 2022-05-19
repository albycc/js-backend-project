/*
File: userprofile.js
Author: Richard Walton
*/

import express from "express";
import db from '../db/connect.js'
import { ObjectId } from '../db/connect.js';
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
    res.redirect('/');
})

export default router;