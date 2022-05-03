/*
File: createuser.js
Author: Richard Walton
*/

import express from "express";
import path from 'path';
import {dirname} from '../utils/path.js'
import {MongoClient} from 'mongodb';

const client = new MongoClient('mongodb://127.0.0.1:27017');
await client.connect();
const db = client.db('jsbackend')
const gamersCollection = db.collection('gamers');


const router = express.Router();
router.use(express.urlencoded({extended:true}));

router.get('/users/register', (req, res) =>{
    res.render(path.join(dirname(), 'views/pages', 'createuser'), {
        pagetitle:'Register'
    })
})

router.post('/users/register', async (req, res) =>{
    console.log('post')
    console.log(req.body)

    await gamersCollection.insertOne(req.body);
    res.redirect('/users/register')
})

export default router;