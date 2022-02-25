const express = require('express')
const app = express()
const port = 3000
const path = require('path') 

const indexRouter = require('./routes/index')
const clientRoute = require('./routes/clients')
// criar rotas

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use((req, res, next)=>{
    console.log('passou aqui')
    next()
})
app.use('/', indexRouter)
app.use('/clients', clientRoute)

app. listen(port, ()=> console.log('linten on port '+port))