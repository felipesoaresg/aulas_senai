const tabela = document.querySelector('#table')
const form = document.getElementById('formulario')
const inputNome = document.querySelector('#inputNome')
const inputPeso = document.querySelector('#inputPeso')
const inputAltura = document.querySelector('#inputAltura')
const btnEnviar = document.querySelector('#btn_enviar')


btnEnviar.addEventListener('click', (evento) => {
    evento.preventDefault()

    const nome = inputNome.value;
    const peso = inputPeso.value;
    const altura = inputAltura.value;
    const imc = (peso / (altura * altura)).toFixed(1)
    console.log(nome, peso, altura, imc)

    const pessoaTr = document.createElement('tr')
    const nomeTd = document.createElement('td')
    const pesoTd = document.createElement('td')
    const alturaTd = document.createElement('td')
    const imcTd = document.createElement('td')

    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    imcTd.textContent = imc

    pessoaTr.appendChild(nomeTd)
    pessoaTr.appendChild(pesoTd)
    pessoaTr.appendChild(alturaTd)
    pessoaTr.appendChild(imcTd)

    tabela.appendChild(pessoaTr)

    //resetar o form
    form.reset()
})