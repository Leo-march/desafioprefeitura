const mysql2 = require ('mysql2')

const connection =mysql2.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    port:3307,
    database:prefeitura
})

exports.execute = (query, params = [], pool = conection) =>{
    return new Promise((resolve, reject) =>{
        if(error) {
            console.error('Erro ao executar a consulta:', error);
            return reject(error)
        }
        resolve(results);
    })
}