function verificaSePar (numero){
    if( numero % 2 === 0 ){
        console.log(`O número ${numero} é PAR`)
    }else{
        console.log(`O número ${numero} é IMPAR`)
    }
}

verificaSePar(8)

const listaNomes = ['Ariana', 'Tini', 'SZA', 'Anahí']
const nome = 'Frank'

const numeros = [2, 8, 9, 10, 3]
const numer = 9

function procuraCorrespondencia(array, valor){
    let encontrado = false

    for(item of array){
        if(item === valor){
            encontrado = true
            break
        }
    }
    if(encontrado){
        console.log(`O valor ${valor} foi encontrado na lista`)
    }else{
        console.log(`O valor ${valor} não foi encontrado na lista`)
    }
}

procuraCorrespondencia(numeros, 10)