// conn PG
const { Pool } = require('pg')

const port =process.env.PGPORT || 5432;
const host =process.env.PGHOST || 'localhost';
const user =process.env.PGUSER || 'postgres';
const database =process.env.PGDATABASE || 'arriendo';
const password =process.env.PGPASSWORD || 'admin';

//let pool;
const pool = new Pool({
    host: host,
    user: user,
    password: password,
    database: database,
    port: port,
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
