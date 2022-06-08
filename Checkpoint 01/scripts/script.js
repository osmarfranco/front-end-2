// Construtor dos cards default
function construirCard() {
  for (item in listaDeConteudos) {
    let imagem = listaDeConteudos[item].imagem
    let titulo = listaDeConteudos[item].titulo
    let descricao = listaDeConteudos[item].conteudo

    let html = 
    `<div class="col">
    <div class="card h-100">
      <img src="${imagem}" class="card-img-top h-100">
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text overflow-auto">${descricao}</p>
      </div>
    </div>
  </div>`

    document.getElementById("container").innerHTML += html
  }
}

// Construtor de novos cards
function construirNovoCard() {
  let imagem = document.getElementById("url-imagem").value
  let titulo = document.getElementById("titulo").value
  let descricao = document.getElementById("descricao").value

  // Verificar se os campos foram preenchidos com espaços propositalmente
  let espacosTitulo = 0
  let espacosDescricao = 0

  for (let i = 1; i < titulo.length; i++) {
    let caractere = titulo[i];
    if (caractere === " " && titulo[(i-1)] === " ") {
      espacosTitulo++
    }
  }

  for (let i = 1; i < descricao.length; i++) {
    let caractere = descricao[i];
    if (caractere === " " && descricao[(i-1)] === " ") {
      espacosDescricao++
    }
  }

  if (espacosTitulo >= 1 || titulo === " ") { titulo = "" }
  if (espacosDescricao >= 1 || descricao === " ") { descricao = ""}
  
  // Incluir dado caso o usuário deixe a descrição ou o título em branco
  titulo === "" ? titulo = "Sem titulo" : titulo = titulo;
  descricao === "" ? descricao = "Sem descrição" : descricao = descricao;

  let html = 
  `<div class="col">
  <div class="card h-100">
    <img src="${imagem}" class="card-img-top h-100">
    <div class="card-body">
      <h5 class="card-title">${titulo}</h5>
      <p class="card-text overflow-auto">${descricao}</p>
    </div>
  </div>
</div>`

  document.getElementById("container").innerHTML += html
  limparFormulario()

  // Fechar modal
  let modal = document.getElementById("criar-novo-card")
  modal.click()
}

// Limpa o formulário do modal
function limparFormulario() {
  let imagem = document.getElementById("url-imagem")
  let titulo = document.getElementById("titulo")
  let descricao = document.getElementById("descricao")

  imagem.value = ''
  titulo.value = ''
  descricao.value = ''
}

// Verifica se existe alguma imagem quebrada e troca por uma imagem placeholder
function corrigirImagensQuebradas(){
  const placeHolder = 'https://blog.megajogos.com.br/wp-content/uploads/2018/07/no-image.jpg'
  let imagens = document.querySelectorAll(".card-img-top")
  for (let i = 0; i < imagens.length; i++) {
    let imagem = imagens[i];
    imagem.onerror = () => {imagem.setAttribute('src', placeHolder)}
  }
}

// Conteúdo dos cards default
let listaDeConteudos = [
  {
    titulo: 'Polinésia Francesa',
    conteudo:
      'Esse é o terceiro ano consecutivo que o Tahiti, Bora Bora, e os restante das 118 ilhas nesse arquipélago do Sul do Pacífico se mantém em primeiro lugar na lista. Não é uma surpresa, já que eles praticamente inventaram o bangalô sobre a água, uma das coisas mais românticas para se acontecer em uma lua de mel. Se relaxar com seu cônjuge ao admirar um mar incrivelmente azul não for razão suficiente para ir, considere as diversas opções de atividades: mergulho com tubarões, compras de jóias em uma fazenda de pérolas negras, jantar a dois em uma ilha particular sob as estrelas, e mergulho com recifes de coral com uma riquíssima vida marinha. Impossível não amar!!',
    imagem: 'https://www.leblog.com.br/wp-content/uploads/2016/05/honeymoon.jpg'
  },
  {
    titulo: 'Santa Lucia',
    conteudo:
      'Esta ilha montanhosa tem mais a oferecer do que apenas suas praias calmantes cercados por resorts de luxo, como o Capella, na foto abaixo. Uma jóia no mar do Caribe, Santa Lúcia traz o melhor da vida na ilha e na mesa. Aficionados por animais selvagens podem desbravar a natureza, se aventurar na tirolesa ou fazer um passeio a cavalo enquanto os românticos podem procurar uma cachoeira isolada ou uma baía deserta.',
    imagem: 'https://www.leblog.com.br/wp-content/uploads/2016/05/st-lucia.jpg'
  },
  {
    titulo: 'África do Sul',
    conteudo:
      'Excelente opção para vários tipos de casais, o turismo do país oferece o melhor desde Resorts e Hotéis de luxo até acomodações mais simples, com passeios como safáris e esportes radicais para os mais aventureiros, até praias paradisíacas e paisagens deslumbrantes no interior. Um dos lugares mais conhecidos para se visitar é a Cidade do Cabo, com lindas opções de praias e o obrigatório passeio para a Table Mountain, grande montanha de cume plano que domina a paisagem da cidade. É possível chegar ao cume através de teleférico ou caminhadas.',
    imagem: 'https://www.leblog.com.br/wp-content/uploads/2016/05/africa-do-sul.jpg'
  },
  {
    titulo: 'Ilhas Maldivas',
    conteudo:
      'A República das Maldivas é um pequeno país insular que fica no Oceano Índico, ao sudoeste do Sri Lanka e da Índia. Com um clima perfeito para os apaixonados, o local é muito procurado para estadia em Hotéis de Bangalô e Resorts à beira mar, já que a principal atração desse destino são as praias. São lindas lagoas rasas e transparentes, mas de um azul surreal e recifes de corais que dão cores e vida ao ambiente. Um lugar perfeito para quem deseja relaxar e curtir o clima tropical desse paraíso!',
    imagem: 'https://www.leblog.com.br/wp-content/uploads/2016/05/maldivas1.jpg'
  },
  {
    titulo: 'Grécia',
    conteudo:
      'Destino clássico para os apaixonados, a Grécia oferece o melhor em resorts, hotéis e até cruzeiros, com uma tradição de romantismo que vem de décadas. São praias com visual surreal, arquitetura histórica e muita cultura. São várias opções de passeios e visitas a igrejas, ruínas, praias e outras atrações, além da gastronomia local que é riquíssima e oferece opções de restaurantes com o melhor da cozinha mediterrânea.',
    imagem: 'https://www.leblog.com.br/wp-content/uploads/2016/05/grecia.jpg'
  },
  {
    titulo: 'Ilhas Fiji',
    conteudo:
      'As ilhas compõem um país que faz parte da Oceania, composto por 332 ilhas no Oceano Pacífico. Com um clima de paraíso tropical, as Ilhas Fiji oferecem Resorts e Hotéis de luxo, acomodações beira mar, e atrações que giram em torno da natureza exuberante presente no local. A gastronomia é caracteristica tropical, com muitos frutos do mar e abundância de sabores, completando a experiência paradisíaca da lua de mel.',
    imagem: 'https://www.leblog.com.br/wp-content/uploads/2016/05/fiji-islands.jpg'
  }
]

// Comando para construir os cards deafault
construirCard()

// Event Listeners
const botaoCriar = document.getElementById("botao-criar")
const botaoLimpar = document.getElementById("botao-limpar")

botaoCriar.addEventListener("click", (evento) => {
  let urlImagem = document.getElementById("url-imagem")
  let titulo = document.getElementById("titulo")

  //Valida se os campos obrigatórios estão preenchidos
  if(urlImagem.value && titulo.value) {
    evento.preventDefault()
    construirNovoCard()
    corrigirImagensQuebradas()
  }
})

botaoLimpar.addEventListener("click", () => {limparFormulario()})

// Checagem inicial por imagens quebradas
corrigirImagensQuebradas()
