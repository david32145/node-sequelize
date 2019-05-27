
const alunoController = require('../controllers/AlunoController')
const RouterAluno = require('express').Router()


RouterAluno.post('/aluno', (req, res)=>{
    alunoController.cad(req, res)
})

RouterAluno.get('/aluno', alunoController.listAll)

module.exports = RouterAluno