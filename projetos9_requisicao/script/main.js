const inputFiltro = document.getElementById('filtro')

async function requisicaoApiRestCountries() {
    try {
        const fetcApiRestCountries = await fetch('https://restcountries.com/v3.1/all')
        const respostaConvertida = await fetcApiRestCountries.json()
        const arrayPaises = respostaConvertida
        return arrayPaises
    }catch (erro){
        console.log(erro)
    }
}

async function filtaPaisesPorNome (nomePais){
    const arrayPaisesCompleto = await requisicaoApiRestCountries()

        if(nomePais == ""){
            return arrayPaisesCompleto
        }else{
            const arrayPaisesFiltrado = arrayPaisesCompleto.filter((pais) => 
            pais.name.common.toLowerCase().includes(nomePais.toLowerCase())
            )
            return arrayPaisesFiltrado
        }
} 


async function renderizaPaises (){
    const arrayPaises = await filtaPaisesPorNome(inputFiltro.value)
    const cardPaises = arrayPaises.map((pais) => {
        return `
                <div class="card-container ${pais.region}">
                    <img src="${pais.flags.png}" alt"">
                    <div class="card-texto">
                        <h2>${pais.name.common}</h2>
                        <hr>
                        <div>
                            <h3>População:</h3>
                            <p>${pais.population}</p>
                        </div>
                        <div>
                            <h3>Capital:</h3>
                            <p>${pais.capital}</p>
                        </div>
                        <div>
                            <h3>Continente:</h3>
                            <p>${pais.continents}</p>
                        </div>
                        <div>
                            <h3>Sigla:</h3>
                            <p>${pais.fifa === undefined ? 'Não consta' : pais.fifa}</p>
                        </div>
                    </div>
                </div>
        `
    })
    container.innerHTML = cardPaises.join('')
}

renderizaPaises()
inputFiltro.addEventListener('keyup', renderizaPaises)
//filtaPaisesPorNome('brazil')