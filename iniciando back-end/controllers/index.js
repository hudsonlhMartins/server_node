const home = (req, res)=>{
    res.render('home', {
        time: '10',
        names: ['hudson', 'francisco', 'martins']
    })
}

const pagina1 = (req, res)=>{
    res.send('pagina one')
}

const calc = (req, res)=>{
    console.log(req.query)
    const {num1, num2} = req.query
    if(num1 && num2){
        const soma = parseFloat(num1) + parseFloat(num2)
        res.render('calc', {soma})
    } else res.render('error')
}

const par = (req, res)=>{
    const num = req.params.num // esse .num e o nome que colocamos la na router par:num
    const isPar = (num % 2 ) == 0

    console.log(num)
    if(isPar){
        res.send("numero e par "+ num)
    }else res.send('numero impar '+ num)
}
module.exports={
    home, pagina1, calc, par
}