async function consultaCep2(cep) {
    try {const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const resultadoConvertido = await resultadoConvertido.json()
        console.log(resultado)
        if(resultado.erro){
            alert('cep não existe')
        }else{
            console.log(resultado)

            const inputBairro = document.getElementById('bairro')
            const inputRua = document.getElementById('endereco')
            const inputCidade = document.getElementById('cidade')
            const inputEstado = document.getElementById('uf')

            inputBairro.value = resultadoConvertido.bairro
            inputRua.value = resultadoConvertido.logradouro
            inputCidade.value = resultadoConvertido.localidade
            inputEstado.value = resultadoConvertido.uf
        }
    }catch (erro){
        alert('cep inválido')} 
}

const inputCep = document.getElementById('cep')
inputCep.addEventListener('focusout', () => consultaCep2(inputCep.value))