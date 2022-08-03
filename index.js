const express = require("express")
const bodyParser = require ("body-parser");
const Model = require("./model")

const app = express ();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send("Olá chatbot");
})

app.post('/webhook', (req, res) => {
    const mensagem = req.body.queryResult.queryText;
    const intencao = req.body.queryResult.intent.displayName;
    let params = null;
    let responder = " "

    if(req.body.queryResult.parameters && req.body.queryResult.parameters.naoVendemos){
        responder = "Puxa nós não vendemos " + req.body.queryResult.parameters.naoVendemos + ". "
        console.log("Responder", responder)
    }

    switch (intencao){
        case 'vercardapio':
            resposta = Model.vercardapio(mensagem, parametros);
            break;
        default:
            resposta = {tipo: 'texto', mensagem: "sinto muito, não entendi o que quer dizer."}
    } 
    
    if (resp.tipo == 'texto'){
        const reply = {
            "fulfillmentText": "Resposta do webhook",
            "fulfillmentMessages": [
                {
                    "text":{
                        "text": [
                            resp.mensagem
                        ],
                    }
                }
            ],
            "source": "",  
        }
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

