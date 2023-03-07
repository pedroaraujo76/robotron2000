const toque = document.querySelector('#calcular');
const msg = document.querySelector('#mensagem');

toque.addEventListener('click', () => {
    console.log('fui clickado');
    msg.innerHTML = 'fui clickado';
})