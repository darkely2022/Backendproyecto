const { findAllPropiedades, findPropiedadPropietario, findFiltroPropiedades,CreatePropiedad } = require('../database/propiedad.repository');
const { findOnePropietario } = require('../database/propietarios.repository')
const express = require('express');

const listpropiedad = async () => {
    try {
        const propiedades = await findAllPropiedades()
        console.log("lectura servicios propiedades")
        console.log(propiedades)
        return propiedades;
    } catch (err) {
        console.log("error propiedades servicio");
        throw err;
    }
}
const listpropiedadpropietario = async (id) => {
    try {
        console.log(id);
        const propiedadespropietario = await findPropiedadPropietario(id)
        console.log("lectura servicios propiedad 1 propietario")
        console.log(propiedadespropietario)
        return propiedadespropietario;
    } catch (err) {
        console.log("error propiedad 1 propietario servicio");
        throw err;
    }
}

const listpropiedadfiltrada = async (comunaid,numhabitacion,metrospropiedad,lavanderia,bicicletero) => {
    try {
        
        const propiedadesfiltradas = await findFiltroPropiedades(comunaid,numhabitacion,metrospropiedad,lavanderia,bicicletero)
        console.log("lectura servicios propiedad filtrada")
        console.log(propiedadesfiltradas)
        return propiedadesfiltradas;
    } catch (err) {
        console.log("error propiedad filtrada servicio");
        throw err;
    }
}

const AgregarPropiedad = async (folio,nombrepropiedad, direccionpropiedad, comunaid, numhabitacion, metrospropiedad, valorpropiedad, src, lavanderia, bicicletero, rutpropietarioid) => {
    try {
        const propietarios = await findOnePropietario(rutpropietarioid)

        if (propietarios.length > 0) {
            console.log("propietario encontrado para propiedad");
            const propiedad = await CreatePropiedad(folio, nombrepropiedad, direccionpropiedad, comunaid, numhabitacion, metrospropiedad, valorpropiedad, src, lavanderia, bicicletero, rutpropietarioid)
            console.log("Grabar servicio propiedad")
            return "Propiedad creada"
        }
        else {
            return "Propietario debe registrarse para registrar propiedad"
        }
    } catch (error) {
        console.log("error grabar propiedad servicio");
        throw err;
    }

}

module.exports = {
    listpropiedad,
    listpropiedadpropietario,
    listpropiedadfiltrada,
    AgregarPropiedad,
};