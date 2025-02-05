// Array para armazenar os nomes dos amigos
let listaAmigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    // Obtém o valor do input
    let nomeAmigo = document.getElementById('amigo').value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    // Verifica se o nome já está na lista
    if (listaAmigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome à lista
    listaAmigos.push(nomeAmigo);

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();

    // Limpa o campo de input
    document.getElementById('amigo').value = '';
}

// Função para atualizar a lista de amigos na tela
function atualizarListaAmigos() {
    let listaAmigosElement = document.getElementById('listaAmigos');
    listaAmigosElement.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada amigo à lista
    listaAmigos.forEach(function (amigo) {
        let itemLista = document.createElement('li');
        itemLista.textContent = amigo;
        listaAmigosElement.appendChild(itemLista);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    // Verifica se há pelo menos 1 amigo na lista
    if (listaAmigos.length === 0) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    // Sorteia um índice aleatório da lista
    let indiceSorteado = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceSorteado];

    // Exibe o resultado na tela
    exibirResultado(amigoSecreto);
}

// Função para exibir o resultado do sorteio
function exibirResultado(amigoSecreto) {
    let resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Limpa o resultado anterior

    // Cria um elemento para exibir o amigo sorteado
    let itemLista = document.createElement('li');
    itemLista.textContent = `Amigo secreto: ${amigoSecreto}`;
    resultadoElement.appendChild(itemLista);
}
