const {findOneRelacion, CreateRelacion} = require('../database/relaciones.repository');
const express = require('express');


const listaRelacion = async (rutapoderadoid, rutalumnoid) => {
    try {
        
        const relaciones = await findOneRelacion(rutapoderadoid, rutalumnoid)
        console.log("lectura servicios relacion")
        console.log(relaciones)
        return relaciones;
    } catch (err) {
        console.log("error relacion servicio");
        throw err;
    }
}

const AgregarRelacion = async(rutapoderadoid, rutalumnoid, relacion_economica) => {
    try {
        const relaciones = await findOneRelacion(rutapoderadoid,rutalumnoid)
        
        if (relaciones.length > 0){
            
             return "Apoderado y alumno existe relacion registrado"
        }
        else {
        console.log(rutapoderadoid, rutalumnoid, relacion_economica) 
        const data = await CreateRelacion(rutapoderadoid, rutalumnoid, relacion_economica) 
        console.log("Grabar servicio relacion")
            return "Relacion creada"
        }
    } catch (error) {
        console.log("error grabar Relacion servicio");
        throw err;
    }

}

module.exports = {
    listaRelacion,
    AgregarRelacion,
};