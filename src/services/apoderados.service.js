const {findOneApoderado, CreateApoderado} = require('../database/apoderados.repository');
const express = require('express');


const listapoderado = async (id) => {
    try {
        
        const apoderados = await findOneApoderado(id)
        console.log("lectura servicios apoderado")
        console.log(apoderados)
        return apoderados;
    } catch (err) {
        console.log("error apoderado servicio");
        throw err;
    }
}

const AgregarApoderado = async(rutapoderado, nombreapoderado, apellidoapoderado, direccionapoderado, comunaapoderado, correoapoderado) => {
    try {
        const apoderados = await findOneApoderado(rutapoderado)
        
        if (apoderados.length > 0){
            
             return "Apoderado ya se encuentra registrado"
        }
        else {
        console.log(rutapoderado, nombreapoderado, apellidoapoderado, direccionapoderado, comunaapoderado, correoapoderado) 
        const data = await CreateApoderado(rutapoderado, nombreapoderado, apellidoapoderado, direccionapoderado, comunaapoderado, correoapoderado) 
        console.log("Grabar servicio apoderado")
            return "Apoderado creado"
        }
    } catch (error) {
        console.log("error grabar Apoderados servicio");
        throw err;
    }

}

module.exports = {
    listapoderado,
    AgregarApoderado,
};