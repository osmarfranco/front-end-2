function jokenpo() {
  //Jogadas
  jogadaJogador()
  jogadaPC()

  compararJogadas()

  mostrarPlacar()
}

function jogadaJogador() {
  escolhaJogador = Number(
    prompt('Escolha: \n 1- Pedra \n 2- Papel \n 3- Tesoura')
  )

  switch (escolhaJogador) {
    case 1:
      console.log('O jogador escolheu: Pedra')
      break

    case 2:
      console.log('O jogador escolheu: Papel')
      break

    case 3:
      console.log('O jogador escolheu: Tesoura')
      break
    default:
      //Troll check
      alert('Opção inválida! :/')
      break
  }
}

function jogadaPC() {
  escolhaPC = Math.floor(Math.random() * 3 + 1)

  switch (escolhaPC) {
    case 1:
      console.log('O computador escolheu: Pedra')
      break

    case 2:
      console.log('O computador escolheu: Papel')
      break

    case 3:
      console.log('O computador escolheu: Tesoura')
      break
  }
}

function compararJogadas() {
  switch (escolhaJogador) {
    case 1:
      if (escolhaPC == 1) {
        alert('Empatou! :O')
        console.log('Empatou! :O')
        break
      } else if (escolhaPC == 2) {
        alert('Você perdeu! :(')
        console.log('O jogador perdeu! :(')
        placarPC += 1
        break
      } else if (escolhaPC == 3) {
        alert('Você ganhou! :)')
        console.log('O jogador ganhou! :)')
        placarJogador += 1
        break
      }

    case 2:
      if (escolhaPC == 1) {
        alert('Você ganhou! :)')
        console.log('O jogador ganhou! :)')
        placarJogador += 1
        break
      } else if (escolhaPC == 2) {
        alert('Empatou! :O')
        console.log('Empatou! :O')
        break
      } else if (escolhaPC == 3) {
        alert('Você perdeu! :(')
        console.log('O jogador perdeu! :(')
        placarPC += 1
        break
      }

    case 3:
      if (escolhaPC == 1) {
        alert('Você perdeu! :(')
        console.log('O jogador perdeu! :(')
        placarPC += 1
        break
      } else if (escolhaPC == 2) {
        alert('Você ganhou! :)')
        console.log('O jogador ganhou! :)')
        placarJogador += 1
        break
      } else if (escolhaPC == 3) {
        alert('Empatou! :O')
        console.log('Empatou! :O')
        break
      }
  }
}

function mostrarPlacar() {
  alert(`Jogador: ${placarJogador} X ${placarPC} Computador`)
  console.log(`Jogador: ${placarJogador} X ${placarPC} Computador`)
}

function checarVitoria() {
  if (placarJogador == 2) {
    alert('Parabéns, você venceu! :D')
    console.log('O jogador venceu a partida! :D')
    return true
  } else if (placarPC == 2) {
    alert('Que pena, você perdeu! :/')
    console.log('O jogador perdeu a partida :/')
    return true
  } else {
    return false
  }
}

//Iniciando placar
let placarJogador = 0
let placarPC = 0

//Resetando escolhas
let escolhaJogador = 0
let escolhaPC = 0

do {
  jokenpo()
} while (checarVitoria() == false)
