
const DataBase = require('../config/dbconfig')
const Disciplina = require('../schemes/Disciplinas')


module.exports.cad = (req, res)=>{
    const data = req.body
    if(!data.name){
        res.send({error:'voce deve passar o nome da disciplina'})
    }
    else{
        const db = DataBase()
        
        table = Disciplina(db)
        table.create({name : data.name})
        .then(()=>{
            res.status(200).send({sucess: 'disciplina cadastrado com sucesso'})
        })
        .catch((err) =>{
            console.log(err)
            res.status(400).send({error: 'disciplina nao cadastrado!!!'})
        }).finally(()=>{
            db.close()
        })

    }
}

module.exports.listAll = (req, res)=>{
    const db = DataBase()

    table = Disciplina(db)

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