//02
let botaoEnviar = document.getElementById("botao-enviar")

botaoEnviar.addEventListener("click", (evento) => {
  evento.preventDefault()
  alert("Enviado!")
})

//03
onload = () => {alert("Bem vindo!")}

//04
botaoEnviar.addEventListener("mouseover", () =>{
  botaoEnviar.style.color = "red"
  botaoEnviar.style.fontWeight = "bold"
})

botaoEnviar.addEventListener("mouseout", () =>{
  botaoEnviar.style.color = "black"
  botaoEnviar.style.fontWeight = "initial"
})

//05
function contarCaracteresDoNome(){
  let item = document.getElementById("nome").value
  document.getElementById("contador").innerHTML = `O seu nome possui ${item.length} caracteres`
}

let inputNome = document.getElementById("nome")
inputNome.addEventListener("input", () => {contarCaracteresDoNome()})