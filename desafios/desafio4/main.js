// Temos uma lista de cores disponibilizada no código abaixo. Você irá criar um botão que, ao ser clicado, faz aparecer esta lista, e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores volte a sumir.

const botao = document.querySelector('#botao');
const lista = document.querySelector('.lista');

botao.addEventListener('click', () => {

    let display = document.querySelector('.lista').style.display
    
    if(display === 'none') {
        lista.style.display = 'block';
    } else {
        lista.style.display = 'none';
    }
})