const { pool } = require('./database');

const findOnePropietario = async (id) => {
    try {
        const consulta ='SELECT * FROM propietario where rutpropietario = $1';
        const values = [id]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos propietario")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database propietario");
        console.log(pool);
        throw err;
        
    }
}

const CreatePropietario = async (rutpropietario,nombrepropietario,apellidopropietario,direccionpropietario,comunapropietario,correopropietario,passwordpropietario) => {
    const consulta = "INSERT INTO propietario values ($1, $2,$3,$4,$5,$6,$7)"
    const values = [rutpropietario,nombrepropietario,apellidopropietario,direccionpropietario,comunapropietario,correopropietario,passwordpropietario]
    const result = await pool.query(consulta, values)
    console.log("Propietario agregado")
    }
    

module.exports = {
    findOnePropietario,
    CreatePropietario,
};
