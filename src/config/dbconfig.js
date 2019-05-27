const Sequelize = require('sequelize')


module.exports = ()=>{
    const db = new Sequelize(
        process.env.DB_NAME, 
        process.env.DB_USER_NAME, 
        process.env.DB_PASSWORD, 
        {
            host : process.env.DB_HOST,
            dialect : process.env.DB_ENGINE
        })
    return db
}