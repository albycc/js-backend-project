/*
File: createuser.js
Author: Richard Walton
*/

import express from "express";
import path from 'path';
import {dirname} from '../utils/path.js'

const router = express.Router();

router.get('/register', (req, res) =>{
    res.render(path.join(dirname(), 'views/pages', 'createuser'), {
        pagetitle:'Register'
    })
})

export default router;