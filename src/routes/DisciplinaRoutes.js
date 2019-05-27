
const disciplinaController = require('../controllers/DisciplinaController')
const RouterDisciplina = require('express').Router()

RouterDisciplina.post('/disciplina', (req, res)=>{
    disciplinaController.cad(req, res)
}) 

RouterDisciplina.get('/disciplina', (req, res)=>{
    disciplinaController.listAll(req, res)
})

module.exports = RouterDisciplina