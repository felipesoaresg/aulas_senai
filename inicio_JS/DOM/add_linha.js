//reconhecer a lista, o input e o botão
//criar uma função que: 
        //pegar valor (texto) do input
        //criar uma linha html vazia(<li>)
        //inserir o texto pego do input na linha
        //definir que a lista é "mãe" da nova linha
//relacionar a execução da função ao clique no botão

const inputTexto = document.querySelector('#conteudo_linha')
const addBotao = document.querySelector('#btn_add_linha')
const addlinhanova = document.querySelector('.lista_acrescenta')

console.log(addlinhanova, inputTexto, addBotao)

function addLinha(){ 
    const textoInput = inputTexto.value
    const novaLinha = document.createElement('li')

    novaLinha.innerText = textoInput

    addlinhanova.appendChild(novaLinha)

    inputTexto.value = ""
}

addBotao.addEventListener('click', addLinha)