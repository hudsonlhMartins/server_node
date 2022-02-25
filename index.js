const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 3000
// se tiver um var de ambienta chamada port vai usar ela se não vai ser a 3000

const indexRouter = require('./routes/index')
const tabuadaRouter = require('./routes/tabuda')

app.use(express.static(path.join(__dirname, 'public')))

// view engine
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use('/', indexRouter) // vai fazer esse roteamento so quando começa com /
app.use('/tabuadas', tabuadaRouter)


app.listen(port, ()=> console.log('tabuada server on port '+ port))