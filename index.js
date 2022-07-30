const express = require("express")
const bodyParser = require ("body-parser");

const app = express ();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Olá chatbot");
})

app.post('/webhook', (req, res) => {
    console.log("Cheguei no webhook")

    const mensagem = req.body.queryResult.queryText;
    const intencao = req.body.queryResult.intent.displayName;

    if(req.body.queryResult.parameters && req.body.queryResult.parameters.naoVendemos){
        const responder = "Puxa nós não vendemos " + req.body.queryResult.parameters.naoVendemos
        console.log("Responder", responder)
    }

    console.log("Mensagem Original:", mensagem)
    console.log("Intenção:", intencao)

    const reply = {
        "fulfilmentText": "Resposta do webhook",
        "fulfilmentMessages": [
            {
                "text":{
                    "text": [
                        "Eu sou um webhook"
                    ],
                }
            }
        ],
        "source": "exemple.com"  
    }


    res.send(reply)
})

const PORT = process.env.PORT || 3000;
const hostName = "127.0.0.1"

app.listen(PORT, () => {
    console.log(`servidor rodando em http://${hostName}:${PORT}`);
})






























// app.get('/pergunta', (req,res) => {
//     msg = req.query.pergunta
//     res.send("Você preguntou: " + msg);
// })

// app.get('/mensagem/:tipo/:id', (req, res) =>{
//     msg=req.params.tipo;
//     cod=req.params.id
//     res.send("voce quer editar o id#" + cod)
// } )


// app.post('/pedido', (req,res) => {
//     console.log(req.body)
//     const produto = req.body.produto
//     const qtd = req.body.quantidade
//     const pgto = req.body.pagamento
//     const bebida = req.body.bebida
    
    
//     const pedido = {
//         produto,
//         qtd,
//         pgto,
//         bebida
//     }

//     res.json(pedido)
// })

