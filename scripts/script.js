var navegacao_ativo = false;

function ativa_navegador () {
    navegacao_ativo = !navegacao_ativo;
    if(navegacao_ativo) {
        navegadores.style.marginLeft = '-10vw';
        navegadores.style.animationName = 'barra';
        content.style.filter = 'blur(2px)';
    } else {
        navegadores.style.marginLeft = '-100vw';
        content.style.filter = 'none';
        navegadores.style.animationName = 'barra_fecha';
    }
}

function fecha_navegador() {
    if (navegacao_ativo) {
        ativa_navegador();
    }
}

window.addEventListener('resize', function(e) {
    if (window.innerWidth > 768 && navegacao_ativo)
        ativa_navegador();
});