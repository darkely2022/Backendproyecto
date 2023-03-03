const app = require('./app');
//const database = require('./database/database');

app.listen(3000, (err) => {
    if (err) throw new Error('error on running server');

    //database.initializer();

    console.log('server listenting on port 3000');
});
