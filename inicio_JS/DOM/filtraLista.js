//reconhecer em variaveis um array com as linhas e o input
//declarar uma função que:
        //reconhece o conteúdo de cafa linha
        //compara o conteúdo da linha com o texto do input e :
            //se houver correspondência mantem a linha
            //caso contrário esconde a linha display: none
//relacionar a função ao input com um encutador de eventos para digitação

const linhasFiltro = document.querySelectorAll('.linhas_filtro')
const inputFiltro = document.querySelector('#input_filtra')
//console.log(linhasFiltro, inputFiltro)

function filtralista (){

    const textoInputFiltro = inputFiltro.value.toUpperCase()

    for(let linha of linhasFiltro){
        const textoLinha = linha.textContent

        if(textoLinha.toUpperCase().includes(textoInputFiltro)){
            linha.style.display='block'
        }else{
            linha.style.display='none'
        }
    }
}

inputFiltro.addEventListener('keyup', filtralista)