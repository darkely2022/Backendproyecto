const request = require("supertest");
const app = require('../src/app');
const database = require('../src/database/database');
const port =process.env.PORT || 3000;

app.listen(port, (err) => {
    if (err) throw new Error('error on running server');

    database.initializer();

    //console.log(database.pool);
    console.log('server listenting on port 3000');
});


describe("Operaciones GET de usuarios", () => {

    it('GET Validar que GET de usuarios retorne un 500 como statusCode', async () => {
        const resultado = await request(app).get('http://localhost:3000/usuarios').send('19')
        expect(resultado.statusCode).toBe(500);
    })
});
/*
describe('GET /usuarios', function() {
    it('responds with json', async function() {
      const response = await request(app)
        .get('./usuarios')
        .set('Accept', 'application/json')
      expect(response.headers["Content-Type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
      //expect(response.body.email).toEqual('foo@bar.com');
    });
  });*/