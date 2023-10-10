const listaDestinos = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Salvador']
const destinoDesejado = 'Rio de Janeiro'
const idadeCliente = 17
const acompanhadoDeMaior = false

/* if(idadeCliente >=18){
    console.log('Pode Vajar, é maior de idade.')
    listaDestinos.splice(1,1)
    console.log(listaDestinos)
}else if(acompanhadoDeMaior){
    console.log('Pode Viajar, está acompanhado')
    listaDestinos.splice(1,1)
    console.log(listaDestinos)
}else{
    console.log('NÃO pode viajar')
} */

if(idadeCliente >= 18 || acompanhadoDeMaior){
    console.log('Pode Viajar')
    listaDestinos.splice(1,1)
    console.log(listaDestinos)
}else{
    console.log('Não pode Viajar')
}
/* const n1 = 2

if(n1 == 2){
    console.log('É igual em valor e tipo')
}else{
    console.log('Não é igual')
} */