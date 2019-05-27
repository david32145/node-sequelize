
const DataBase = require('../config/dbconfig')
const Aluno = require('../schemes/Aluno')

module.exports.cad = (req, res)=>{
    const data = req.body

    if(!data.name || !data.age || !data.id_disciplina){
        res.status(400).send({error:'parametros invalidos'})
    }else{
        const db = DataBase()

        const table = Aluno(db)

        table.create({name : data.name, age: data.age, fk_disciplina : data.id_disciplina})
        .then(()=>{
            res.status(200).send({sucess : 'aluno cadastrado'})
        })
        .catch((err)=>{
            console.log(err)
            res.status(400).send({error: 'aluno nao cadastrado'})
        }).finally(()=>{
            db.close()
        })
    }
}

module.exports.listAll = (req, res)=>{
    const db = DataBase()

    table = Aluno(db)

    table.findAll()
    .then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        console.log(err)
        res.status(400).send({error: 'error inesperado!!!'})
    }).finally(()=>{
        db.close()
    })

}