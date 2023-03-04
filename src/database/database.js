// conn PG
const { Pool } = require('pg')

//let pool;
const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'arriendo',
    port: '5432',
    allowExitOnIdle: true
    })

const initializer = () => {
    
   // const clienteDB = new Pool(pool);
   const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'arriendo',
    port: '5432',
    allowExitOnIdle: true
    })  
};

module.exports = { pool, initializer };
