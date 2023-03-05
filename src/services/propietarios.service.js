const {findOnePropietario,CreatePropietario} = require('../database/propietarios.repository');
const express = require('express');

const listpropietario = async (id) => {
    try {
        console.log(id);
        const propietarios = await findOnePropietario(id)// ComunaRepository.findAllComunas()
        console.log("lectura servicios propietarios")
        console.log(propietarios)
        return propietarios;
    } catch (err) {
        console.log("error propietarios servicio");
        throw err;
    }
}

const AgregarPropietario = async(rutpropietario,nombrepropietario,apellidopropietario,direccionpropietario,comunapropietario,correopropietario,passwordpropietario)=>{
    try {
        console.log(rutpropietario,nombrepropietario,apellidopropietario,direccionpropietario,comunapropietario,correopropietario,passwordpropietario)
        const propietario = await CreatePropietario(rutpropietario,nombrepropietario,apellidopropietario,direccionpropietario,comunapropietario,correopropietario,passwordpropietario)
        console.log("Grabar servicio propietarios")
    } catch (error) {
        console.log("error grabar propietarios servicio");
        throw err;
    }

}

module.exports = {
    listpropietario,
    AgregarPropietario,
};