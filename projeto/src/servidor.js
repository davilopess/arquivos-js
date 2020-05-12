const porta = 3003
const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/produtos', (req, res, next) => {                    //Listar todos os produtos
    res.send(bancoDeDados.getProdutos())
})

app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProduto(req.params.id))          // Seleciona um produto
})

app.post('/produtos', (req, res) => {
    const produto = bancoDeDados.salvarProduto({              // Cadastrar um produto
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})
app.put('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.salvarProduto({              //alterar um produto
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.listen(porta, () => {
    console.log(`Servidor exec na porta ${porta}`)
})