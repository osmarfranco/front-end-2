const nomeInput = document.getElementById('nome')
const sobrenomeInput = document.getElementById('sobrenome');
const botaoEnviar = document.getElementById('enviar');

function imprimirDados() {
  let nome = nomeInput.value;
  let sobrenome = sobrenomeInput.value;

  let html = 
  `<div class="container">
  <p>
  Trim: ${nome.trim()} ${sobrenome.trim()}
  <br>
  Upper case: ${nome.toUpperCase()} ${sobrenome.toUpperCase()}
  <br>
  Lower case: ${nome.toLowerCase()} ${sobrenome.toLowerCase()}
  <br>
  Concat: ${nome.concat(sobrenome)}
  </p>
  Replace: ${nome.replace("a", "@").replace("e", "3")} ${sobrenome.replace("a", "@").replace("e", "3")}  
  </div>`
  
  document.body.innerHTML += html
}

botaoEnviar.addEventListener("click", (evento) => {
  
  evento.preventDefault()
  imprimirDados()
})