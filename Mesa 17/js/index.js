// Aqui realizamos a consulta da promise, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        let user = data.results[0]
        console.log(data)
        renderizarDadosUsuario(user)
    });

//Elementos HTML
const CARD = document.getElementById("card")
const RANDOM_BTN = document.getElementById("random")

function renderizarDadosUsuario(user) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    let html = 
    `<img src="${user.picture.large}">
    <h2>${user.name.title} ${user.name.first} ${user.name.last}</h2>
    <p>${user.email}</p>`

    CARD.innerHTML += html
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.

function pedirRandom(){
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        let user = data.results[0]
        console.log(data)
        renderizarDadosUsuario(user)
    });
}

function limparCard(){
   CARD.innerHTML = "" 
}

RANDOM_BTN.addEventListener("click", () => {
    limparCard()
    pedirRandom()
})