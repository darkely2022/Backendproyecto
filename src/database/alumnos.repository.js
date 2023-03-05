const { pool } = require('./database');

const findOneAlumno = async (id) => {
    try {
        const consulta ='SELECT * FROM alumno where rutalumno = $1';
        const values = [id]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos alumno")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database alumno");
        console.log(pool);
        throw err;
        
    }
}

const CreateAlumno = async ( rutalumno,nombrealumno,apellidoalumno,direccionalumno,comunaalumno,correoalumno,password) => {
    const consulta = "INSERT INTO alumno values ($1, $2,$3,$4,$5,$6,$7)"
    const values = [rutalumno,nombrealumno,apellidoalumno,direccionalumno,comunaalumno,correoalumno,password]
    const result = await pool.query(consulta, values)
    console.log("Alumno agregado")
    }
    

module.exports = {
    findOneAlumno,
    CreateAlumno,
};
