const { pool } = require('./database');

const findOneApoderado = async (id) => {
    try {
        const consulta ='SELECT * FROM apoderado where rutapoderado = $1';
        const values = [id]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos apoderado")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database apoderado");
        console.log(pool);
        throw err;
        
    }
}

const CreateApoderado = async (rutapoderado, nombreapoderado, apellidoapoderado, direccionapoderado, comunaapoderado, correoapoderado) => {
    try {
        const consulta = "INSERT INTO apoderado values ($1, $2,$3,$4,$5,$6)"
        const values = [rutapoderado, nombreapoderado, apellidoapoderado, direccionapoderado, comunaapoderado, correoapoderado]
        const result = await pool.query(consulta, values)
        console.log("Apoderado agregado")
    } catch (error) {
        console.log("error database grabar apoderado");
        console.log(pool);
        throw err;
    }

}

module.exports = {
    findOneApoderado,
    CreateApoderado,
}; 