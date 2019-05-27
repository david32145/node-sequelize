
const Sequelize = require('sequelize')

module.exports = (db)=>{

    const Disciplina = db.define('disciplinas', {
        id :{
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        name: {
            type : Sequelize.STRING,
            allowNull : false
        }
    })

    return Disciplina;
}