function criarInterface() {
    const labelNome = document.createElement('label');
    labelNome.setAttribute('for', 'bttNome');
    labelNome.textContent = 'Nome: ';
    
    const bttNome = document.createElement('input');
    bttNome.setAttribute('type', 'text');
    bttNome.setAttribute('id', 'bttNome');
    bttNome.setAttribute('placeholder', 'Digite seu nome');
    bttNome.style.marginRight = '10px';

    document.getElementById('info').appendChild(labelNome);
    document.getElementById('info').appendChild(bttNome);

    const labelTempo = document.createElement('label');
    labelTempo.setAttribute('for', 'bttTempo');
    labelTempo.textContent = 'Tempo: ';
    
    const bttTempo = document.createElement('input');
    bttTempo.setAttribute('type', 'number');
    bttTempo.setAttribute('id', 'bttTempo');
    bttTempo.setAttribute('placeholder', 'Digite o tempo em segundos');
    bttTempo.style.marginRight = '10px';

    document.getElementById('info').appendChild(labelTempo);
    document.getElementById('info').appendChild(bttTempo);

    const bttIniciar = document.createElement('button');
    bttIniciar.textContent = 'Iniciar';
    bttIniciar.addEventListener('click', iniciarContagem);

    document.getElementById('info').appendChild(bttIniciar);

}    

function iniciarContagem() {
    
    const nome = document.getElementById('bttNome').value;
    const tempo = parseInt(document.getElementById('bttTempo').value) * 1000;

    if(nome === '' || isNaN(tempo) || tempo <= 0) {
        alert('Por favor, preencha o nome e o tempo corretamente.');
        return;
    }

    // setTimeout(() => {
    //     criarMensagem(nome);
    // }, tempo);

    // Exercício: Adaptar para criar uma contagem regressiva.
    setInterval(() => {
        criarMensagem(nome);
    }, tempo);
    
}

function criarMensagem(nome) {
    const mensagem = document.createElement('div');
    mensagem.setAttribute('class', 'mensagem');
    mensagem.textContent = nome;
    document.getElementById('content').appendChild(mensagem);
}    