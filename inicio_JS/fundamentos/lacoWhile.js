//laço com While 

const listaDestinos = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador']

const destinoDesejado = 'sp'

let indice = 0

console.log(listaDestinos.length)

/* while(indice < listaDestinos.length){

    console.log(listaDestinos[indice])

    indice ++
} */

/* while(indice < listaDestinos.length){

    if(listaDestinos[indice] == destinoDesejado){
        console.log('Destino encontrado!')
        break 
    }else{
        console.log('Destino não encontrado!')
    }
    indice ++
} */


let encontrou = false

while(indice < listaDestinos.length){

    if(listaDestinos[indice] == destinoDesejado){
        encontrou = true
        break 
    }
    indice ++
}

if (encontrou) {
    console.log('destino encontrado')
}else{
    console.log('destino não encontrado')
}