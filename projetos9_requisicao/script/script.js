/* const retorno = fetch('https://viacep.com.br/ws/06365350/json/')
     .then(promessa => promessa.json())
     .then((resultado) => {
        if(resultado.erro ===true){
            alert('este CEP não existe')
        }else{
            console.log(resultado)
            const inputBairro = document.getElementById('bairro')
            const inputRua = document.getElementById('logradouro')

            inputBairro.value = resultado.bairro
            inputRua.value = resultado.logradouro
        }
     })
     .catch(erro => alert('Cep inválido'))
 */

const inputCep = document.getElementById('cep')
/* const valorCep = inputCep.value */

//declarando a função
function consultaCep (cep){
    const retorno = fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(promessa => promessa.json())
        .then((resultado) => {
            if(resultado.erro){
                alert('este CEP não existe')
            }else{
                console.log(resultado)
                
                //reconhecendo os inputs
                const inputBairro = document.getElementById('bairro')
                const inputRua = document.getElementById('endereco')
                const inputCidade = document.getElementById('cidade')
                const inputEstado = document.getElementById('uf')

                inputBairro.value = resultado.bairro
                inputRua.value = resultado.logradouro
                inputCidade.value = resultado.localidade
                inputEstado.value = resultado.uf
            }

        })
        .catch(erro => alert('Cep inválido'))
        .finally(console.log('concluído!'))
}
inputCep.addEventListener('focusout', () => consultaCep(inputCep.value))