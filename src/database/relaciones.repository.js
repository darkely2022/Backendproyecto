const { pool } = require('./database');

const findOneRelacion = async (rutapoderadoid, rutalumnoid) => {
    try {
        const consulta ='SELECT * FROM relacion where rutapoderadoid = $1 and rutalumnoid =$2';
        const values = [rutapoderadoid, rutalumnoid]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos relacion")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database realacion");
        console.log(pool);
        throw err;
        
    }
}

const CreateRelacion = async (rutapoderadoid, rutalumnoid, relacion_economica)=>{
    try {
        const consulta = "INSERT INTO relacion  values ($1, $2,$3)"
        const values = [rutapoderadoid, rutalumnoid, relacion_economica]
        const result = await pool.query(consulta, values)
        console.log("Relacion agregado")
    } catch (error) {
        console.log("error database grabar relacion",rutapoderadoid, rutalumnoid, relacion_economica);
        console.log(pool);
        throw err;
    }

}

module.exports = {
    findOneRelacion,
    CreateRelacion,
}; 