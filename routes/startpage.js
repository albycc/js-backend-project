/*
File: startpage.js
Author: Richard Walton
*/

import express from "express";

const router = express.Router();

router.get('/', (req, res) =>{
    res.render('pages/startpage', {
        pagetitle:'Homepage'
    })
})

export default router;