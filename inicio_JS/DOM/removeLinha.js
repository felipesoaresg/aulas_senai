//reconhecer as linhas como um array
//criar uma função que remove o item que recebeu o evento 'click'
//aplica a função a todos os itens do array

const linhasRemoviveis = document.querySelectorAll('.linha_remove')

console.log(linhasRemoviveis)

function removeLinha (event){
    const linhaClicada = event.target

    linhaClicada.remove()
}

for(let linha of linhasRemoviveis){
    linha.addEventListener('click', removeLinha)
}