var request = require('supertest');
var app = require('../app.js');

describe('GET /', function() {
    it('respond with hello world', function(done) {
        console.log('buffala');
        request(app).get('/').expect('Giagiaoonhghfhgf', done);

    });
});