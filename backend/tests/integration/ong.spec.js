const request = require('supertest');
const app = require('../../src/app');
const conn = require('../../src/database/connection')
describe('ONG', () =>{
    beforeEach(async() => {
      await  conn.migrate.rollback();
      await  conn.migrate.latest();
    });
    afterAll(async () => {
    await conn.destroy();
    });
    it('should be able to create a new ONG', async () => {
        const res = await request(app)
        .post('/ongs')
        .send({
            name: "APAD",
            email: "contato@ipad.com.br",
            whatsapp: "43984120857",
            city: "Parana",
            uf: "PR"
        });
        expect(res.body).toHaveProperty('id');
        expect(res.body.id).toHaveLength(8);
    })
})