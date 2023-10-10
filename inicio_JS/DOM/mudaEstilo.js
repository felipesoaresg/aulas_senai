//reconhecer todos os páragrafos com a classe específica - retornar um Array
//criar uma estrutura de laço que percorra todo o array e mude a cor

const paragrafos = document.querySelectorAll('.paragrafo')

console.log(paragrafos)

//laco for of
for(paragrafo of paragrafos){

    paragrafo.style.color = 'blue'
    paragrafo.style.textTransform = 'uppercase'
    paragrafo.style.fontFamily = 'sans-serif'
}