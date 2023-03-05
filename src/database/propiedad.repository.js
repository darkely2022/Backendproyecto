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

const CreatePropiedad = async (folio, nombrepropiedad, direccionpropiedad, comunaid, numhabitacion, metrospropiedad, valorpropiedad, src, lavanderia, bicicletero, rutpropietarioid) => {
    const consulta = "INSERT INTO propiedad values ($1, $2,$3,$4,$5,$6,$7,$8,$9,$10,$11)"
    const values = [folio,nombrepropiedad, direccionpropiedad, comunaid, numhabitacion, metrospropiedad, valorpropiedad, src, lavanderia, bicicletero, rutpropietarioid]
    const result = await pool.query(consulta, values)
    console.log("Propiedad agregada")
    }
 
module.exports = {
    findAllPropiedades,
    findPropiedadPropietario,
    CreatePropiedad,
};
