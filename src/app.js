const express = require('express')

const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
//const db = require('./config/dbconfig')()
const RouterDisciplina = require('./routes/DisciplinaRoutes')
const RouterAluno = require('./routes/AlunoRoutes')

app.use(RouterDisciplina)
app.use(RouterAluno)

module.exports = app