const btnAlterar = document.getElementById('darkmode')

function modoEscuro (){
    document.body.classList.toggle('escuro')
}

btnAlterar.addEventListener('change', modoEscuro)