const mysql = require('../mysql')

exports.criarUser = async(req, res) => {
    try {
        const resultado = await mysql.execute(
            `INSERT INTO usuarios(nome, email, senha, telefone, data_nasc) VALUES
(?, ?, ?, ?, ?)`,
            [
                req.body.nome,
                req.body.email,
                req.body.senha,
                req.body.telefone,
                req.body.data_nasc

            ]
        );
        return res.status(201).send({
            "Mensagem": "Usuário criado com sucesso!",
            "Resultado": resultado
        })
    } catch (error) {
        return res.status(500).send({ error })
    }
}