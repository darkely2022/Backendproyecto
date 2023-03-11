const { pool } = require('./database');

const findReservaAlumno = async (id) => {
    try {
        const consulta ='SELECT * FROM reserva where rutalumnoid = $1';
        const values = [id]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos reserva alumno")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database reserva alumno");
        console.log(pool);
        throw err;
        
    }
}

const findReservaPropietario = async (idpro) => {
    try {
        const consulta ='SELECT * FROM reserva where rutpropietarioid  = $1';
        const values = [idpro]
        const {rows} = await pool.query(consulta, values);
        console.log("lectura base datos reserva propietario")
        console.log(rows);
        return rows
    } catch (err) {
        console.log("error database reserva propietario");
        console.log(pool);
        throw err;
        
    }
}

const CreateReserva = async (rutalumnoid,rutpropietarioid ,foliopropiedad,fecha_inicio,fecha_fin , monto ,cantidad_dias) => {
    try {
        const consulta = "INSERT INTO reserva (rutalumnoid,rutpropietarioid ,foliopropiedad,fecha_inicio,fecha_fin , monto ,cantidad_dias) values ($1, $2,$3,$4,$5,$6, $7)"
        const values = [rutalumnoid,rutpropietarioid ,foliopropiedad,fecha_inicio,fecha_fin , monto ,cantidad_dias]
        const result = await pool.query(consulta, values)
        console.log("Reserva agregada")
    } catch (error) {
        console.log("error database grabar Reserva");
        console.log(pool);
        throw err;
    }

}

module.exports = {
    findReservaAlumno,
    findReservaPropietario,
    CreateReserva,
}; 