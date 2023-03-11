const { findReservaAlumno, findReservaPropietario, CreateReserva } = require('../database/reservas.repository');
const express = require('express');

const listareservaAlumno = async (id) => {
    try {

        const reservas = await findReservaAlumno(id)
        console.log("lectura servicios reservas alumno")
        console.log(reservas)
        return reservas;
    } catch (err) {
        console.log("error reservas alumno");
        throw err;
    }
}

const listareservaPropietario = async (idpro) => {
    try {

        const reservas = await findReservaPropietario(idpro)
        console.log("lectura servicios reservas propietario")
        console.log(reservas)
        return reservas;
    } catch (err) {
        console.log("error reservas propietario");
        throw err;
    }
}

const AgregarReserva = async (rutalumnoid,rutpropietarioid ,foliopropiedad,fecha_inicio,fecha_fin , monto ,cantidad_dias) => {
    try {

        console.log(rutalumnoid,rutpropietarioid ,foliopropiedad,fecha_inicio,fecha_fin , monto ,cantidad_dias)
        const data = await CreateReserva(rutalumnoid,rutpropietarioid ,foliopropiedad,fecha_inicio,fecha_fin , monto ,cantidad_dias)
        console.log("Grabar servicio reserva")
        return "Reserva creada"

    } catch (error) {
        console.log("error grabar Reserva servicio");
        throw err;
    }

}

module.exports = {
    listareservaAlumno,
    listareservaPropietario,
    AgregarReserva,
};