const { pool } = require('./database');

const findAllPropiedades = async () => {
    try {
        const {rows} = await pool.query('SELECT * FROM propiedad');
        console.log("lectura base datos all propiedad")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database propiedad");
        console.log(pool);
        throw err;
        
    }
}

const findPropiedadPropietario = async (id) => {
    try {
        const consulta ='SELECT * from propiedad where rutpropietarioid = $1';
        const values = [id]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos propiedad 1 propietario")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database propiedad 1 propietario");
        console.log(pool);
        throw err;
        
    }
}

const findFiltroPropiedades = async (comunaid,numhabitacion,metrospropiedad,lavanderia,bicicletero) => {
    try {
        const consulta = 'SELECT * FROM propiedad where comunaid = $1 and numhabitacion = $2 and metrospropiedad >= $3 and lavanderia >= $4 and bicicletero >=$5';
        const values = [comunaid,numhabitacion,metrospropiedad,lavanderia,bicicletero]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos filtro propiedad")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database filtro propiedad");
        console.log(pool);
        throw err;
        
    }
}

const CreatePropiedad = async (folio, nombrepropiedad, direccionpropiedad, comunaid, numhabitacion, metrospropiedad, valorpropiedad, src, lavanderia, bicicletero, rutpropietarioid) => {
    const consulta = "INSERT INTO propiedad ( nombrepropiedad  , direccionpropiedad , comunaid,numhabitacion ,metrospropiedad ,valorpropiedad ,src,lavanderia ,bicicletero, rutpropietarioid ) values ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10)"
    const values = [folio,nombrepropiedad, direccionpropiedad, comunaid, numhabitacion, metrospropiedad, valorpropiedad, src, lavanderia, bicicletero, rutpropietarioid]
    const result = await pool.query(consulta, values)
    console.log("Propiedad agregada")
    }
 
module.exports = {
    findAllPropiedades,
    findPropiedadPropietario,
    findFiltroPropiedades,
    CreatePropiedad,
};
