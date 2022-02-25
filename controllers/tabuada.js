const list = (req, res)=>{
    const list =[]
    for(let i = 1; i <=100; i++){
        list.push(i)
    }
    res.render('tabuadas/list',{
        list
    })
}

const tabuada = (req, res)=>{
    const tabuada = []
    const num = req.params.num
    for(let i=0; i<=10; i++){
        tabuada.push({
            i, 
            num,
            resultado: num*i
        })
    }
    res.render('tabuadas/tabuada', {
        num: req.params.num,
        tabuada
    })
}

module.exports ={
    list, tabuada
}