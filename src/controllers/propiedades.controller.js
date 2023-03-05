const {listpropiedad,listpropiedadpropietario,AgregarPropiedad} = require('../services/propiedad.service');

const list = async (req, res) => {
    try {
        const propiedades = await listpropiedad() 
        res.json({
            propiedades: propiedades,
        });
        console.log("controller propiedades")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller propiedades",
        });
    }
}

const findOne = async (req, res) => {
    try {
        const { id } = req.params
        const propiedadesxpropietario = await listpropiedadpropietario(id) 
        res.json({
            propiedades: propiedadesxpropietario,
        });
        console.log("controller propiedad 1 propietario")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller propiedad 1 propietario",
        });
    }
}
const Create = async (req, res) => {
    try {
       
        const {folio, nombrepropiedad,direccionpropiedad,comunaid,numhabitacion,metrospropiedad,valorpropiedad, src , lavanderia , bicicletero ,rutpropietarioid} = req.body
        console.log(folio,nombrepropiedad ,direccionpropiedad,comunaid,numhabitacion,metrospropiedad,valorpropiedad, src , lavanderia , bicicletero ,rutpropietarioid )
        const data = await AgregarPropiedad(folio, nombrepropiedad,direccionpropiedad,comunaid,numhabitacion,metrospropiedad,valorpropiedad, src , lavanderia , bicicletero ,rutpropietarioid)
        res.json({
           message:data
        });
        console.log("controller grabar propiedad")
    } catch (err) {
        res.status(500).json({
            message: "error grabar controller propiedad",
        });
    }
}



module.exports = {
    list,
    findOne,
    Create,
};