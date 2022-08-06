const axios = require ("axios");

exports.VerCardapio = async (msg, params) => {
    let url = 'https://sheetdb.io/api/v1/brosov14uxs2x';
    let cardapio = [];
    let produto = {};
    let retorno = {}
    
    return await axios
            .get (url)
            .then ((resultado) => {
                retorno = resultado.data;
                
                for (let i = 0; i<retorno.length; i++ ){
                    console.log("cada elemento: ", retorno[i]);
                    
                    produto = {
                        tipo: 'card',
                        titulo: `cod: ${retorno[i].codigo} - ${retorno[i].nome}`,
                        preco: `R$ ${retorno[i].preco},00`,
                        url: retorno[i].Imagem
                    }
                    
                    cardapio.push(produto)

                }


                let resposta = {
                    tipo: 'card',
                    cardapio
                }
                return resposta
            })
            .catch (err => console.log(err));
}

// http://lorempixel.com.br/500/500/?2

exports.verStatus = (msg, params) => {
    let resposta = {
        tipo: 'imagem',
        url: 'http://lorempixel.com.br/200/200/?2'
    }

    return resposta
}