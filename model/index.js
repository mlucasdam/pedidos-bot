exports.VerCardapio = (msg, params) => {
    let resposta = {
        tipo: 'imagem',
        url: 'http://lorempixel.com.br/500/500/?2'
    }
    return resposta
}

// http://lorempixel.com.br/500/500/?2

exports.verStatus = (msg, params) => {
    let resposta = {
        tipo: 'texto',
        mensagem: 'Calma o seu pedido ja está sendo prepardo!!'
    }

    return resposta
}