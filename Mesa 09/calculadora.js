// Importar módulos
import somar from './functions/somar.js'
import subtrair from './functions/subtrair.js'
import multiplicar from './functions/multiplicar.js'
import dividir from './functions/dividir.js'

// Funções do teclado
function limparDisplay() {
  display.value = '_'
}

function digitarNumero(tecla) {
  if (display.value == '_') {
    display.value = tecla
  } else {
    display.value += tecla
  }
}

function digitarOperacao(tecla) {
  if (
    display.value.endsWith('+') ||
    display.value.endsWith('-') ||
    display.value.endsWith('x') ||
    display.value.endsWith('÷')
  ) {
    let posicao = display.value.length
    let renova = display.value.slice(0, posicao - 1)
    display.value = renova + tecla
    switch (tecla) {
      case '+':
        console.log(operador)
        operador = 1
        console.log(operador)
        break
      case '-':
        operador = 2
        break
      case 'x':
        operador = 3
        break
      case '÷':
        operador = 4
        break
    }
  } else {
    display.value += tecla
  }
}

function backspace() {
  let posicao = display.value.length
  let renova = display.value.slice(0, posicao - 1)
  display.value = renova
  if (display.value == '') {
    display.value = '_'
  }
}

function executarOperacao() {
  let operacao = display.value
  let primeiroNumero
  let segundoNumero
  let resultado
  let operacaoDecupada

  switch (operador) {
    case 1:
      operacaoDecupada = operacao.split('+')
      primeiroNumero = Number(operacaoDecupada[0])
      segundoNumero = Number(operacaoDecupada[1])
      resultado = somar(primeiroNumero, segundoNumero)
      display.value = resultado
      operador = 0
      break
    case 2:
      operacaoDecupada = operacao.split('-')
      primeiroNumero = Number(operacaoDecupada[0])
      segundoNumero = Number(operacaoDecupada[1])
      resultado = subtrair(primeiroNumero, segundoNumero)
      display.value = resultado
      operador = 0
      break
    case 3:
      operacaoDecupada = operacao.split('x')
      primeiroNumero = Number(operacaoDecupada[0])
      segundoNumero = Number(operacaoDecupada[1])
      resultado = multiplicar(primeiroNumero, segundoNumero)
      display.value = resultado
      operador = 0
      break
    case 4:
      operacaoDecupada = operacao.split('÷')
      primeiroNumero = Number(operacaoDecupada[0])
      segundoNumero = Number(operacaoDecupada[1])
      resultado = dividir(primeiroNumero, segundoNumero)
      display.value = resultado
      operador = 0
      break
    default:
      if (resultado == NaN) {
        resultado = 'ERRO'
        display.value = resultado
      } else {
        resultado = 'ERRO'
        display.value = resultado
      }
      operador = 0
      break
  }
}

const display = document.getElementById('display')

// Event Listeners
// Teclado Numérico
document.getElementById('n1').addEventListener('click', () => {
  digitarNumero(1)
})
document.getElementById('n2').addEventListener('click', () => {
  digitarNumero(2)
})
document.getElementById('n3').addEventListener('click', () => {
  digitarNumero(3)
})
document.getElementById('n4').addEventListener('click', () => {
  digitarNumero(4)
})
document.getElementById('n5').addEventListener('click', () => {
  digitarNumero(5)
})
document.getElementById('n6').addEventListener('click', () => {
  digitarNumero(6)
})
document.getElementById('n7').addEventListener('click', () => {
  digitarNumero(7)
})
document.getElementById('n8').addEventListener('click', () => {
  digitarNumero(8)
})
document.getElementById('n9').addEventListener('click', () => {
  digitarNumero(9)
})
document.getElementById('n0').addEventListener('click', () => {
  digitarNumero(0)
})

//Teclado de Operações

let operador = 0

document.getElementById('somar').addEventListener('click', () => {
  digitarOperacao('+')
  operador = 1
})
document.getElementById('subtrair').addEventListener('click', () => {
  digitarOperacao('-')
  operador = 2
})
document.getElementById('multiplicar').addEventListener('click', () => {
  digitarOperacao('x')
  operador = 3
})
document.getElementById('dividir').addEventListener('click', () => {
  digitarOperacao('÷')
  operador = 4
})
document.getElementById('backspace').addEventListener('click', () => {
  backspace()
})
document.getElementById('limpar').addEventListener('click', () => {
  limparDisplay()
})
document.getElementById('igual').addEventListener('click', () => {
  executarOperacao()
})
