const {findOneAlumno,CreateAlumno} = require('../database/alumnos.repository');
const express = require('express');

const listalumno = async (id) => {
    try {
        console.log(id);
        const alumnos = await findOneAlumno(id)
        console.log("lectura servicios alumno")
        console.log(alumnos)
        return alumnos;
    } catch (err) {
        console.log("error alumno servicio");
        throw err;
    }
}

const AgregarAlumno = async(rutalumno,nombrealumno,apellidoalumno,direccionalumno,comunaalumno,correoalumno,password) => {
    try {
        const alumnos = await findOneAlumno(rutalumno)
        
        if (alumnos.length > 0){
            
             return "Alumno ya se encuentra registrado"
        }
        else {
        console.log(rutalumno,nombrealumno,apellidoalumno,direccionalumno,comunaalumno,correoalumno,password)
        const data = await CreateAlumno(rutalumno,nombrealumno,apellidoalumno,direccionalumno,comunaalumno,correoalumno,password)
        console.log("Grabar servicio alumnos")
            return "Alumno creado"
        }
    } catch (error) {
        console.log("error grabar Alumnos servicio");
        throw err;
    }

}

module.exports = {
    listalumno,
    AgregarAlumno,
};