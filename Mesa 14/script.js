const NOME_INPUT = document.getElementById('nome')
const RECADO_INPUT = document.getElementById('recado')
const BOTAO_ENVIAR = document.getElementById('enviar')
const CONTENT = document.getElementById('content')
const RECADOS = document.getElementById('recados')

let historicoEmCache = localStorage.getItem('1')

function mostrarHistorico() {
  let historicoArray = JSON.parse(historicoEmCache)

  if (!historicoArray) {
    historicoArray = []
  }

  for (let post of historicoArray) {
    imprimirDados(post.nome, post.recado)
  }
}

function armezenaRecado() {
  let post = { nome: NOME_INPUT.value, recado: RECADO_INPUT.value }
  let historicoArray = JSON.parse(historicoEmCache)

  if (!historicoArray) {
    historicoArray = []
  }

  historicoArray.unshift(post)

  localStorage.setItem('1', JSON.stringify(historicoArray))
}

function imprimirDados(nome, recado) {
  let html = `<p>
    <strong>${nome}</strong> disse:
    <br>
    ${recado}
  </p>`

  RECADOS.innerHTML += html
}

function limpar() {
  NOME_INPUT.value = ''
  RECADO_INPUT.value = ''
}

BOTAO_ENVIAR.addEventListener('click', event => {
  event.preventDefault()
  armezenaRecado()
  location.reload()
})

onload = () => {
  mostrarHistorico()
}

//Resetar o Histórico
// localStorage.removeItem("1")
