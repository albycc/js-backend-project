/*
File: server.js
Author: Richard Walton
*/

import express from "express";
import startpageRouter from './routes/startpage.js'
import userslistRouter from './routes/memberlist.js'
import profileRouter from './routes/userprofile.js'
import createRouter from './routes/createuser.js'
import path from 'path';
import {dirname} from './utils/path.js'

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(startpageRouter);
app.use(userslistRouter);
app.use(profileRouter);
app.use(createRouter);

app.use((req, res, next) =>{
    res.status(404).render(path.join(dirname(), 'views/pages', '404'), {
        pagetitle:'404'
    })
})

app.listen(PORT, ()=>{
    console.log('Server running on', PORT)
})
