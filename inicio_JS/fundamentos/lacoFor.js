const listaDestinos =  ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador']

const destinoDesejado = 'Recife'

let destino = false
for(let destino of listaDestinos){
    if(destino === destinoDesejado){
        if(destino === destinoDesejado){
            destino = true
        }
    }
}

if(destino){
    console.log('ENCONTRADO!')
}else{
    console.log('NÃO encontrado')
}

/* for(contador; condição; contador++){
    acão!
}

for(let i = 0, i< listaDestinos.length; i++){
    console.log(listaDestinos[i])
} */



/* let destinoEncontrado = false

for(let i = 0; i < listaDestinos.length; i++){

    if(listaDestinos[i] === destinoDesejado){
        destinoEncontrado = true
        break
    }
}

if(destinoEncontrado){
    console.log(`O destino ${destinoDesejado} foi encontrado na lista`)
}else{
    console.log(`O destino ${destinoDesejado} não foi encontrado na lista`)
}

console.log(destinoEncontrado) */