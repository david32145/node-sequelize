
const Sequelize = require('sequelize')

module.exports = (db)=>{

    const Disciplina = require('./Disciplinas')(db);

    const Aluno = db.define('alunos', {
        id :{
            type : Sequelize.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
        name: {
            type : Sequelize.STRING,
            allowNull : false
        },
        age : {
            type : Sequelize.INTEGER,
            allowNull: false
        }
    })
    Aluno.belongsTo(Disciplina, {foreignKey: 'fk_disciplina'})

    return Aluno;
}