/*
File: memberlist.js
Author: Richard Walton
*/

import express from "express";
import path from 'path';
import {dirname} from '../utils/path.js'

const router = express.Router();

router.get('/users', (req, res) =>{
    res.render(path.join(dirname(), 'views/pages', 'memberlist'), {
        pagetitle:'Memberlist'
    })
})

export default router;