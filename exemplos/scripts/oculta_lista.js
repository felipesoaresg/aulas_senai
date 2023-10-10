const iconeLista = document.querySelector('.bi-list')
const listaLinks = document.querySelector('#lista_nav')

console.log(iconeLista, listaLinks)

function ocultaLista(){
    listaLinks.classList.toggle('oculta')
}

iconeLista.addEventListener('click', ocultaLista)
