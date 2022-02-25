const indexController = require('./index')
const expect = require('chai').expect
const sinon = require('sinon')

describe('index controller', ()=>{
    it('returns all list', ()=>{
        // para testa preciamos saber oq ele manda no caso
        // o list ele eviar so list
        let res = {
            render: function(){}
        }
        data ={
            time: '10',
            names: ['hudson', 'francisco', 'martins']
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('home', data)
        indexController.home({}, res)
    })

    it('calc', ()=>{
       // calc depende do req.query
       // assim a gente tem que fazer alguns caso de teste passando volores e não passando
        let res = {
            render: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('error')
        indexController.calc({query: {}}, res)
        // como ele nececida do query temos que passar ele aqui
        // mesmo quando ele não return temos que passar ele vazio
    })
    it('handles withou num1 and num2 calc', ()=>{
        // calc depende do req.query
        // assim a gente tem que fazer alguns caso de teste passando volores e não passando
         let res = {
             render: function(){}
         }
         let mock = sinon.mock(res)
         mock.expects('render').once().withArgs('error') // sem passar nenhum param
         indexController.calc({query: {}}, res)
         // como ele nececida do query temos que passar ele aqui
         // mesmo quando ele não return temos que passar ele vazio
     })

     it('handles withou num1', ()=>{
         let res = {
             render: function(){}
         }
         let req = {
             query:{
                 num2: '10'
             }
         }
         let mock = sinon.mock(res)
         mock.expects('render').once().withArgs('error')
         indexController.calc(req, res)
         // como ele nececida do query temos que passar ele aqui
         // mesmo quando ele não return temos que passar ele vazio
     })
     it('handles withou num2', ()=>{
        let res = {
            render: function(){}
        }
        let req = {
            query:{
                num1: '20'
            }
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('error') 
        indexController.calc(req, res)
        // como ele nececida do query temos que passar ele aqui
        // mesmo quando ele não return temos que passar ele vazio
    })

     it('calc', ()=>{
        // calc depende do req.query
        // assim a gente tem que fazer alguns caso de teste passando volores e não passando
         let res = {
             render: function(){}
         }
         let req = {
             query: {
                 num1: '10',
                 num2: '20'
             }
         }
         let mock = sinon.mock(res)
         mock.expects('render').once().withArgs('calc', {soma:30})
         indexController.calc(req, res)
     })

    
})