const {findAllComunas} = require('../database/comunas.repository');
const express = require('express');

const listcomuna = async () => {
    try {
        const comunas = await findAllComunas()// ComunaRepository.findAllComunas()
        console.log("lectura servicios")
        console.log(comunas)
        return comunas;
    } catch (err) {
        console.log("error comunas servicio");
        throw err;
    }
}

module.exports = {
    listcomuna,
};