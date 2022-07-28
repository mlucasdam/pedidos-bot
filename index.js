const express = require("express")
const bodyParser = require ("body-parser");

const app = express ();
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    res.send("Olá Mundo");
})

app.get('/pergunta', (req,res) => {
    msg = req.query.pergunta
    res.send("Você preguntou: " + msg);
})

app.get('/mensagem/:tipo/:id', (req, res) =>{
    msg=req.params.tipo;
    cod=req.params.id
    res.send("voce quer editar o id#" + cod)
} )


app.post('/pedido', (req,res) => {
    console.log(req.body)
    const produto = req.body.produto
    const qtd = req.body.quantidade
    const pgto = req.body.pagamento
    const bebida = req.body.bebida
    
    
    const pedido = {
        produto,
        qtd,
        pgto,
        bebida
    }

    res.json(pedido)
})

app.listen(3000, '127.0.0.1', () => {
    console.log("Servidor Rodando");
})


