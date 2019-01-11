function mostraCadastro() {
    document.querySelector('header').classList.toggle('desativa');
    document.querySelector('.main-content').classList.toggle('desativa');
    document.querySelector('.cadastro').classList.toggle('ativa');
};

function fechaCadastro() {
    document.querySelector('header').classList.remove('desativa');
    document.querySelector('.main-content').classList.remove('desativa');
    document.querySelector('.cadastro').classList.remove('ativa');
};