function darkMode() {
  let status = document.getElementById('dark-mode')

  if (status.checked) {
    document.body.classList.add('dark')
  } else {
    document.body.classList.remove('dark')
  }
}

function construirPosts() {
  for (item in listaDeConteudos) {
    let titulo = listaDeConteudos[item].titulo
    let imagem = listaDeConteudos[item].imagem
    let descricao = listaDeConteudos[item].conteudo

    let html = `<div class="item">
    <img src=${imagem} />
    <h2>${titulo}</h2>
    <p>${descricao}</p>
    </div>`

    document.querySelector('.container').innerHTML += html
  }
}

function alterarImagemDoPost() {
  let resposta = Number(
    prompt(
      'De qual felino você quer alterar a imagem? \n 1- Tigre \n 2- Leão \n 3- Leopardo \n 4- Pantera Negra \n 5- Jaguar \n 6- Guepardo'
    )
  )
  let novaURL = ''
  let a = ''
  switch (resposta) {
    case 1:
      novaURL = prompt('Digite a url da nova foto:')
      a = document.querySelectorAll('.item')[0].children[0]
      a.setAttribute('src', `${novaURL}`)
      alert('Foto trocada com sucesso!')
      break
    case 2:
      novaURL = prompt('Digite a url da nova foto:')
      a = document.querySelectorAll('.item')[1].children[0]
      a.setAttribute('src', `${novaURL}`)
      alert('Foto trocada com sucesso!')
      break
    case 3:
      novaURL = prompt('Digite a url da nova foto:')
      a = document.querySelectorAll('.item')[2].children[0]
      a.setAttribute('src', `${novaURL}`)
      alert('Foto trocada com sucesso!')
      break
    case 4:
      novaURL = prompt('Digite a url da nova foto:')
      a = document.querySelectorAll('.item')[3].children[0]
      a.setAttribute('src', `${novaURL}`)
      alert('Foto trocada com sucesso!')
      break
    case 5:
      novaURL = prompt('Digite a url da nova foto:')
      a = document.querySelectorAll('.item')[4].children[0]
      a.setAttribute('src', `${novaURL}`)
      alert('Foto trocada com sucesso!')
      break
    case 6:
      novaURL = prompt('Digite a url da nova foto:')
      a = document.querySelectorAll('.item')[5].children[0]
      a.setAttribute('src', `${novaURL}`)
      alert('Foto trocada com sucesso!')
      break
    default:
      alert('Opção inválida, tente novamente!')
      break
  }
}

let listaDeConteudos = [
  {
    titulo: 'O tigre',
    conteudo:
      'O tigre (Panthera tigris) é uma das espécies da subfamília Pantherinae (família Felidae) pertencente ao gênero Panthera. É encontrado de forma nativa apenas no continente asiático; é um predador carnívoro e é a maior espécie de felino do mundo junto com o leão.',
    imagem: './imagens/tiger.jpg'
  },
  {
    titulo: 'O leão',
    conteudo:
      'O leão (Panthera leo) é um mamífero carnívoro da família dos felinos é uma das cinco espécies do gênero gênero Panthera. Os leões selvagens vivem em populações cada vez mais dispersas e fragmentadas na África subsahariana (com exceção das regiões florestais e das regiões de selva da Bacia do Congo) e uma pequena área do noroeste da Índia.',
    imagem: './imagens/leon.jpg'
  },
  {
    titulo: 'O leopardo',
    conteudo:
      'O leopardo (Panthera pardus) é um mamífero carnívoro da família dos felinos. Como três dos outros felinos do gênero Panthera: o leão, o tigre e a onça-pintada, são caracterizados por uma modificação do osso hióide que lhes permite rugir. É também conhecido como pantera marrom e, quando tem a pelagem completamente escura, como pantera negra (melanista).',
    imagem: './imagens/leopardo.jpg'
  },
  {
    titulo: 'A pantera negra',
    conteudo:
      'A pantera negra é uma variação escura (melanismo) de várias espécies de felinos grandes, especialmente o leopardo (Panthera pardus) e a onça-pintada (Panthera onca). Mas deve-se ressaltar que não se trata de uma espécie nova, nem mesmo de uma subespécie, é simplesmente uma variação negra destes animais.',
    imagem: './imagens/pantera-negra.jpg'
  },
  {
    titulo: 'O jaguar',
    conteudo:
      'O jaguar, ou jaguarete (Panthera onca) é um carnívoro felídeo da sub-família Panthera e do gênero Panthera. É a única das cinco espécies existentes deste gênero encontradas nas Américas. Também é o maior felino das Américas e o terceiro maior do mundo, depois do tigre (Panthera tigris) e do leão (Panthera leo).',
    imagem: './imagens/jaguar.jpg'
  },
  {
    titulo: 'O guepardo',
    conteudo:
      'O guepardo, ou chita (Acinonyx jubatus) é um membro atípico da família felina. É o único representante vivo do gênero Acinonyx. Ele caça graças à sua visão e grande velocidade. É o animal terrestre mais rápido do mundo, atingindo uma velocidade máxima de 115 km/h em corridas de até quinhentos metros.',
    imagem: './imagens/chita.jpg'
  }
]

construirPosts()

if (confirm('Você quer mudar a foto de algum card?')) {
  do {
    alterarImagemDoPost()
  } while (confirm('Você quer mudar a foto de algum card?'))
}
