const axios = require ("axios");

exports.VerCardapio = async (msg, params) => {
    let url = 'https://sheetdb.io/api/v1/brosov14uxs2x';
    let produto = {};

    return await axios
            .get (url)
            .then ((resultado) => {
                console.log (resultado.data[0]);
                produto = resultado.data[0];
                
                let resposta = {
                    tipo: 'card',
                    titulo: `cod: ${produto.codigo} - ${produto.nome}`,
                    preco: `R$ ${produto.preco},00`,
                    url: produto.Imagem
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