async function aparecerPaises (){
    try{
        const pais = await fetch ('https://restcountries.com/v3.1/all')
        const paises = await pais.json()
        console.log(paises)

        const arrayPaises = paises
        return arrayPaises
    }catch (erro){
        console.log(erro)
    }
}

async function renderizaPaises (){
    const arrayPaises = await aparecerPaises()
    const cardPais = arrayPaises.map(iten => {
        return `
            <div class="card">
                <img src="${iten.flags.png}"alt"Bandeira de ${iten.name.common}">
                <h2>${iten.name.common}</h2>
                <hr>
                <p>População:${iten.population}</p>
                <p>Região:${iten.region}</p>
                <p>Capital:${iten.capital}</p>
            </div>`
    })
    const container = document.getElementById('container')
    container.innerHTML = cardPais.join('')
}
renderizaPaises()