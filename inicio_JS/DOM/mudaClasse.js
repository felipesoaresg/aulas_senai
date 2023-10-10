//reconhecer a div e também o botão
//criar uma função que aplique a nova classe a div
//disparar a função quando o botão for acionado

const divMudaClasse = document.getElementById('div_muda')
const botao = document.getElementById('btn_altera_classe')

console.log(divMudaClasse, botao)

/* function mudaClasse(){

    divMudaClasse.classList.toggle('div_nova_classe')
} */

//associando a função ao clique do botão
botao.addEventListener('click', () => {
    divMudaClasse.classList.toggle('div_nova_classe')
})