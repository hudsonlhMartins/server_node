const clientController = require('./client')
const expect = require('chai').expect
const sinon = require('sinon')

describe('client controller', ()=>{
    it('returns all list', ()=>{
        // para testa preciamos saber oq ele manda no caso
        // o list ele eviar so list
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('list')
        clientController.list({}, res)
    })

    it('returns all clients', ()=>{
        // para testa preciamos saber oq ele manda no caso
        // o list ele eviar so list
        let res = {
            send: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('send').once().withArgs('pagina create')
        clientController.create({}, res)
    })
})