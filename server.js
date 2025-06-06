const http = require('http')
const express = require('express')
const servidor = http.createServer(express)

servidor.listen(3000, () => {
    console.log("Api rodando na porta 3000");
});

