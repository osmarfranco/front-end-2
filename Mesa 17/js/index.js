// Aqui realizamos a consulta da promise, esperando sua resposta assíncrona
async function requisitarDados() {
    const data = await fetch('https://randomuser.me/api/')
    const json = await data.json()

    return json.results[0]
}

//Elementos HTML
const CARD = document.getElementById("card")
const RANDOM_BTN = document.getElementById("random")

async function renderizarDadosUsuario() {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    let user = await requisitarDados()
    
    let html = 
    `<img src="${user.picture.large}">
    <h3>${user.name.title} ${user.name.first} ${user.name.last}</h3>
    <p>${user.email}</p>`

    CARD.innerHTML = html
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.

RANDOM_BTN.addEventListener("click", () => {
    renderizarDadosUsuario()
})

onload = () => {
    renderizarDadosUsuario()
}