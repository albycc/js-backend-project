/*
File: userprofile.js
Author: Richard Walton
*/

import express from "express";
import path from 'path';
import {dirname} from '../utils/path.js'

const router = express.Router();

router.get('/profile', (req, res) =>{
    res.render(path.join(dirname(), 'views/pages', 'userprofile'), {
        pagetitle:'User profile'
    })
})

export default router;