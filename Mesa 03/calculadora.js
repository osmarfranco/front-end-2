// Importar módulos
import somar from './functions/somar.js'
import subtrair from './functions/subtrair.js'
import multiplicar from './functions/multiplicar.js'
import dividir from './functions/dividir.js'

function inserirNumeros() {
  primeiroNumero = Number(prompt('Digite o primeiro número:'))
  segundoNumero = Number(prompt('Digite o segundo número:'))

  //Verificar se os valores inseridos realmente são números
  if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
    console.log('Um dos valores inseridos não é um número, tente novamente')
  }
}

function escolherOperacao() {
  operacao = prompt(
    'Qual operação você quer fazer? \n Escolha entre as opções abaixo: \n A- Somar \n B- Subtrair \n C- Multiplicar \n D- Dividir'
  ).toUpperCase()

  // Verificar se a opção inserida é válida
  switch (operacao) {
    case 'A':
      operacao = 'A'
      break

    case 'B':
      operacao = 'B'
      break

    case 'C':
      operacao = 'C'
      break

    case 'D':
      operacao = 'D'
      break

    default:
      console.log('Opção inválida, tente novamente')
      operacao = false
      break
  }
}

function calcular(a, b, c) {
  switch (c) {
    case 'A':
      resultado = somar(a, b)
      console.log('O resultado da soma é ' + resultado)
      break

    case 'B':
      resultado = subtrair(a, b)
      console.log('O resultado da subtração é ' + resultado)
      break

    case 'C':
      resultado = multiplicar(a, b)
      console.log('O resultado da multiplicação é ' + resultado)
      break

    case 'D':
      resultado = dividir(a, b)
      console.log('O resultado da divisão é ' + resultado)
      break
  }
}

// Reset
let primeiroNumero = 0
let segundoNumero = 0
let resultado = 0
let operacao = ''

// Apenas seguir para a inserção de números se uma operação válida for escolhida
do {
  escolherOperacao()
} while (operacao == false)

// Apenas calcular se os valores inseridos forem números
do {
  inserirNumeros()
} while (isNaN(primeiroNumero) || isNaN(segundoNumero))

calcular(primeiroNumero, segundoNumero, operacao)
