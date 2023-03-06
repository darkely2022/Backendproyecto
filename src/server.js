const app = require('./app');
const database = require('./database/database');
const port =process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) throw new Error('error on running server');

    database.initializer();

    //console.log(database.pool);
    console.log('server listenting on port 3000');
});
