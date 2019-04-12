const request = require('supertest');
const server = require('./server.js');


describe('Server', () => {
    describe('GET /', () => {
      it('should pass with /', () => {
        return request(server)
          .get('/')
          .then(response => {
            expect(response.status).toBe(200)
          });
      });

      it('should check for text', () => {
        return request(server).get('/').expect('Content-Type', /text/);
      });
    });

    describe('GET /games', () => {
        it('should get all games',  () => { 
            return request(server).get('/games') 
            .then(response => {
                expect(response.statusCode).toBe(200)
              });
            }); 
        }); 
    
        it('should check for each game object using js Object Notation',  () => {
          return request(server).get('/games').expect('Content-Type', /json/);
        });
}); 
