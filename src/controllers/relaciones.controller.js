const { listaRelacion, AgregarRelacion} = require('../services/relaciones.service');

const findOne = async (req, res) => {
    try {
        const { rutapoderadoid , rutalumnoid } = req.body
        const relaciones = await listaRelacion(rutapoderadoid, rutalumnoid) 
        res.json({
            relaciones: relaciones,
        });
        console.log("controller relaciones")
    } catch (err) {
        res.status(500).json({
            message: "error getting controller relaciones",
        });
    }
}

const SaveRelacion = async (req, res) => {
    try {
       // const { id } = req.params
        const { rutapoderadoid, rutalumnoid, relacion_economica}=req.body 
        console.log(rutapoderadoid, rutalumnoid, relacion_economica)
        const data = await AgregarRelacion(rutapoderadoid, rutalumnoid, relacion_economica)
        res.json({
           message:data
        });
        console.log("controller grabar relaciones")
    } catch (err) {
        res.status(500).json({
            message: "error grabar controller relaciones",
        });
    }
}

module.exports = {
    findOne,
    SaveRelacion,
};