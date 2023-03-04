
const express = require('express');
const cors = require('cors');

const routes = require('./routes/index.js');
//const { findAllComunas} = require('./database/comunas.repository')


const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static('./'));

/*app.get("/comunas", async (req, res) => {
    const comunas = await findAllComunas()
    res.json({
        comunas: comunas
    })
    })*/
    
//app.get('/', () => { res.sendFile(`${__dirname}/index.html`)})


// routes
//app.use('/',(req, res)=> res.json({message:"Hola prueba"}))
//app.get('/home', (req, res) => res.send("Hello World Express Js"))
//app.get("/", (req, res) => {res.sendFile(__dirname + "/index.html")})
    
app.use('/', routes)
//app.use(express.static(__dirname + '/static'));


module.exports = app;
