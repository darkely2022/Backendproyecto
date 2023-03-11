const { listareservaAlumno, listareservaPropietario,AgregarReserva} = require('../services/reservas.service');

const findReservasAlumno = async (req, res) => {
    try {
        const { id } = req.params
        const reservas = await listareservaAlumno(id) 
        res.json({
            reservas: reservas,
        });
        console.log("controller reservas alumno")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller reservas alumno",
        });
    }
}

const findReservasPropietario = async (req, res) => {
    try {
        const { idpro } = req.params
        const reservas = await listareservaPropietario(idpro) 
        res.json({
            reservas: reservas,
        });
        console.log("controller reservas propietario")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller reservas propietario",
        });
    }
}

const SaveReserva = async (req, res) => {
    try {
        const { rutalumnoid,rutpropietarioid ,foliopropiedad,fecha_inicio,fecha_fin , monto ,cantidad_dias}=req.body 
        console.log(rutalumnoid,rutpropietarioid ,foliopropiedad,fecha_inicio,fecha_fin , monto ,cantidad_dias)
        const data = await AgregarReserva(rutalumnoid,rutpropietarioid ,foliopropiedad,fecha_inicio,fecha_fin , monto ,cantidad_dias)
        res.json({
           message:data
        });
        console.log("controller grabar reserva")
    } catch (err) {
        res.status(500).json({
            message: "error grabar controller reserva",
        });
    }
}

module.exports = {
    findReservasAlumno,
    findReservasPropietario,
    SaveReserva,
};