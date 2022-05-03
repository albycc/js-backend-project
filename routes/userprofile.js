/*
File: userprofile.js
Author: Richard Walton
*/

import express from "express";
import path from 'path';
import {dirname} from '../utils/path.js'
import {MongoClient, ObjectId} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
await client.connect();
const db = client.db('jsbackend')

const router = express.Router();

router.get('/user/:id', async (req, res) =>{
    const gamer = await db.collection('gamers').findOne({_id: ObjectId(req.params.id)});
    console.log(gamer)
    res.render(path.join(dirname(), 'views/pages', 'user'), {
        pagetitle:'User profile',
        ...gamer
    })
})

export default router;