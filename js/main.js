const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
console.log(estatisticas)
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento) => { // for each, vai acontecer algo no controle, que é a função anônima
    elemento.addEventListener('click', (evento) => { // adicionando uma evento, que quando clickar
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); // pegando o texto que está na função manipulaDados e usando parentNode para pegar o elemento acima dele, como uma classe por exemplo.
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if(operacao === '-') {
        peca.value = Number(peca.value) - 1;
    } else {
        peca.value = Number(peca.value) + 1;
    }
}

function atualizaEstatistica(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = Number(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}

// Ultimo desafio: Usar estruturas de repetição para melhorar o código.
// Usar data no html ara pegar um elemento que será alterado, adicionar em uma variável, usar o comando for each para cada elemento na variável, adicionar um evento com uma function anônima que terá um document que buscará a imagem = "link da imagem" + o elemento.value ".png".

const mudando = document.querySelectorAll('[data-mudando]');

mudando.forEach((elemento) => {
    elemento.addEventListener('click', () => {
        document.querySelector('#robotron').src ='img/Robotron 2000 - ' + elemento.value + '.png';        
    })
})