let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = chai.expect;
chai.use(chaiHttp);

describe('Testing Api',() => {
    it('Should retun 200 for user',(done) => {
        chai.request('http://127.0.0.1:7710')
        .get('/users')
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err;
        })
    })

    it('Should retun 404 for user',(done) => {
        chai.request('http://127.0.0.1:7710')
        .get('/user')
        .then((res) => {
            expect(res).to.have.status(404);
            done()
        })
        .catch((err) => {
            throw err;
        })
    })

    it('Should retun 200 for adduser',(done) => {
        chai.request('http://127.0.0.1:7710')
        .post('/addUser')
        .send({"name":"Testing Api","isActive":true})
        .then((res) => {
            expect(res).to.have.status(200);
            done()
        })
        .catch((err) => {
            throw err;
        })
    })

    it('Should retun 200 for deactivate',(done) => {
        chai.request('http://127.0.0.1:7710')
        .post('/deactivatedUser')
        .send({"_id":"655b764f48da16e6f52b942e"})
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res.text).to.equal('User Deactivated');
            done()
        })
        .catch((err) => {
            throw err;
        })
    })

    it('Should retun 200 for activate',(done) => {
        chai.request('http://127.0.0.1:7710')
        .post('/activatedUser')
        .send({"_id":"655b764f48da16e6f52b942e"})
        .then((res) => {
            expect(res).to.have.status(200);
            expect(res.text).to.equal('User Activated');
            done()
        })
        .catch((err) => {
            throw err;
        })
    })

})