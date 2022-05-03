/*
File: startpage.js
Author: Richard Walton
*/

import express from "express";
import path from 'path';
import {dirname} from '../utils/path.js'


const router = express.Router();

router.get('/', (req, res) =>{
    res.render(path.join(dirname(), 'views/pages', 'startpage'), {
        pagetitle:'Homepage'
    })
})

export default router;