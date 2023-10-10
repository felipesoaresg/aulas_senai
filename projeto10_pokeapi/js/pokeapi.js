const container = document.getElementById('container')
console.log(container)

async function requisicaoApiPokemon (){

    const retornoPromessas = []

    for(let index = 1; index <=150; index ++){
        const fetchApiPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)

        const retornoApiPokemon = await fetchApiPokemon.json()
        retornoPromessas.push(retornoApiPokemon)
    }

    const arrayPokemon = await retornoPromessas
    console.log(arrayPokemon)
    return arrayPokemon
}

async function renderizaPokemons (){
    const arrayPokemons = await requisicaoApiPokemon()
    const cardPokemon = arrayPokemons.map((pokemon) => {
        return `
        <div class="card ${pokemon.types[0].type.name}">
            <div class="card_img">
                <img src="${pokemon.sprites.front_default}">
                <img src="${pokemon.sprites.front_shiny}">
            </div>
                <h2>${pokemon.name}</h2>
                    <div class="textos">     
                        <h3>Tipos:</h3>
                        <p>${pokemon.types[0].type.name}</p>
                    </div>
                    <div class="textos">
                        <h3>Habilidades:</h3>
                        <p>${pokemon.abilities[0].ability.name}</p>
                    </div>
            </div>
        </div>
        `
    })
    container.innerHTML = cardPokemon.join('')
}

renderizaPokemons()