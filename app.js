// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto'

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 a 100'
let listaNumeroSorteados = []
let tentativas = 1;
let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoTela('h1', 'jogo do número secreto');
exibirTextoTela('p', 'escolha um número entre 1 a 100');


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (numeroSecreto == chute) {
        let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa'
        let mensagemTentativas = `Você acertou com ${tentativas} ${palavraTentativa}!`;
        exibirTextoTela('h1', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
            if (chute > numeroSecreto) {
                exibirTextoTela('h1', 'o numero é menor');
             } else {
                    exibirTextoTela('h1', 'o numero é maior')
                }
            }tentativas++
            limparCampo() 
    }
        
    

function gerarNumeroAleatorio () {
    let numeroEscolhido = parseInt(Math.random() * 100 + 1);
    let quantidadeDeElementosLista = listaNumeroSorteados.length;

    if (quantidadeDeElementosLista == 100) {
        listaNumeroSorteados =[]
    }

    if (listaNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio()
    } else {
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados)
        return numeroEscolhido
    }
};

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo;
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function exibirMensagemInicial() {
    exibirTextoTela('h1', 'jogo do número secreto');
    exibirTextoTela('p', 'escolha um número entre 1 a 100');
}