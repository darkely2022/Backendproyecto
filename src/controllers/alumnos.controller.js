const {listalumno, AgregarAlumno} = require('../services/alumnos.service');

const findOne = async (req, res) => {
    try {
        const { id } = req.params
        const alumnos = await listalumno(id) 
        res.json({
            alumnos: alumnos,
        });
        console.log("controller alumnos")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller alumnos",
        });
    }
}

const SaveAlumno = async (req, res) => {
    try {
       // const { id } = req.params
        const { rutalumno,nombrealumno,apellidoalumno,direccionalumno,comunaalumno,correoalumno,password}=req.body
        console.log(rutalumno,nombrealumno,apellidoalumno,direccionalumno,comunaalumno,correoalumno,password) 
        const data = await AgregarAlumno(rutalumno,nombrealumno,apellidoalumno,direccionalumno,comunaalumno,correoalumno,password) 
        res.json({
           message:data
        });
        console.log("controller grabar alumnos")
    } catch (err) {
        res.status(500).json({
            message: "error grabar controller alumnos",
        });
    }
}

module.exports = {
    findOne,
    SaveAlumno,
};