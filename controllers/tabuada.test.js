const tabuadaController = require('./tabuada')
const sinon = require('sinon')

describe('tabuada controller', ()=>{
    it('list', ()=>{
        const list =[]
        for(let i = 1; i <=100; i++){
            list.push(i)
        }
        let res = {
            render: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuadas/list', {list})
        tabuadaController.list({}, res)
    })

    // outro metado
    it('calc tabuada', ()=>{
        const tabuada = []
        const num = 10
        for(let i=0; i<=10; i++){
            tabuada.push({
                i, 
                num,
                resultado: num*i
            })
        }
        let res = {
            render: function(){}
        }
        let mock = sinon.mock(res)
        mock.expects('render').once().withArgs('tabuadas/tabuada', { 
            num,
            tabuada
        })
        tabuadaController.tabuada({params: {num}}, res)
    })
})