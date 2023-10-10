//tipos de variaveis

const n1 = 15
const n2 = '15'
const n2Number = parseInt(n2)
const n3 = 15.5
const nome = 'ariana'
const sobrenome = 'grande'
const nomeCompleto = nome +  ' ' + sobrenome
const listaNomes = ['sza', 'tini', 'frank']
const maiorIdade = true 

//template string!
console.log(`O tipo da variável n1 é ${typeof n1}`)
console.log(`O tipo da variável n2 é ${typeof n2}`)
console.log(`O tipo da variável n2Number é ${typeof n2Number}`)
console.log(`O tipo da variável n3 é ${typeof n3}`)
console.log(`O tipo da variável nome é ${typeof nome}`)
console.log(`O tipo da variável ListaNomes é ${typeof listaNomes}`)
console.log(`O tipo da variável maioridade é ${typeof maiorIdade}`)

console.log(n1 + n2Number) //1515
console.log(n1 + n3) //30.5

//tipagem fraca do JS
console.log(n2 * 3) //45

//operações aritméticas
console.log (2 + 2) //4
console.log (2 - 2) //0
console.log (2 * 2) //4
console.log (2 / 2) //1

console.log(2 + 2 * 2) //6
console.log( (2 + 2) * 2) //8

console.log(nomeCompleto)