//estrutura condicional IF
const nome = 'Tini'
const idade = 19
const nota = 10

//verificar se a idade informada é maior/igual ou menor que 18
if(idade>=18){
    console.log(`${nome} é MAIOR de idade`)
}else{
    console.log(`${nome} é MENOR de idade`)
}

//verificar se o aluno foi aprovado ou reprovado 
/* if(nota>=50){
    console.log(`${nome} foi APROVADO`)
}else{
    console.log(`${nome} foi REPROVADO`)
} */

//se a nota for maior/igual 70 retonar aprovado
//se a nota for maior/igual a 50 retornar recuperação
if(nota >= 70){
    console.log('APROVADO')
}else if(nota => 50){
    console.log('RECUPERAÇÃO')
}else{
    console.log('REPROVADO')
}