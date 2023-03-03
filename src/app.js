
const express = require('express');
const cors = require('cors');

//const routes = require('./routes');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use('/',(req, res)=> res.json({message:"Hola"}))
//app.use('/', routes)

module.exports = app;
