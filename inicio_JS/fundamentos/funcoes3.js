//declarando a função

/*
function somaValores (){
    return 3 + 5
}*/

function somaValores (n1, n2){
    return n1 + n2
}

console.log(somaValores(2, 1))
console.log(somaValores(4, 10))

const listaNomes = ['Ariana', 'Tini', 'SZA', 'Frank']
const nomeProcurado = 'Tini'

const listaNumeros = [5, 8, 9, 13, 3]
const numeroProcurado = 9

const listaFrutas = ['Maça', 'Laranja', 'Banana', 'Pera']
const frutaEncontrada = 'Limão'

/* let encontrouValor = false

for(nome of listaNomes){
    if(nome === nomeProcurado){
        encontrouValor = true
        break
    }
}

if(encontrouValor === true){
    console.log('Valor encontrado!')
}else{
    console.log('Valor não encontrado!')
} */

function procuraValorEmArray (array, valorProcurado){

    let encontrouOValor = false

    for(item of array){
        if(item === valorProcurado){
            encontrouOValor = true
            break
        }
    }
    if(encontrouOValor === true){
        console.log(`O valor ${valorProcurado} foi encontrado no ${array}`)
    }else{
        console.log(`O valor ${valorProcurado} não foi encontrado no ${array}`)
    }
}


procuraValorEmArray(listaNomes, nomeProcurado)
procuraValorEmArray(listaNumeros, numeroProcurado)
procuraValorEmArray(listaFrutas, frutaEncontrada)

procuraValorEmArray(['Mouse', 'Teclado', 'monitor', 'memória RAM'], 'monitor')



////função tira a média

/* const notas = [4.5, 7.5, 4, 8]

const somaNotas = notas[0] + notas[1] + notas[2] + notas[3]
const media = somaNotas


console.log(media) */

const notas = [4.5, 7.5, 4, 8]
const precos = [20, 30, 50, 10]

function tiraMedia (arrayNumeros){

    let somaNotas = 0

    for(numero of arrayNumeros){
        somaNotas += numero
    }
    const media = somaNotas/arrayNumeros.lenght

    console.log(media)
}

tiraMedia(notas)
tiraMedia(precos)