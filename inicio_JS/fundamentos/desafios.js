/* Desafio1: Conversão de Temperatura;
	- Crie um código para a conversão de temperaturas
	- Formulas:
		=> Celsius para Fahrenheit: (temperaturaCelsius * 9/5) + 32
		=> Fahrenheit para Celsius: ((temperaturaFahrenheit - 32) * 5) /9 */
function converteCelsiusParaFahrenheit (Celsius){
    return ((Celsius * 9/5) + 32).toFixed(2)
}

console.log(converteCelsiusParaFahrenheit(35))

function converteFahrenheitParaCelsius (Fahrenheit){
    return (((Fahrenheit - 32) * 5) /9).toFixed(2)
}

console.log(converteFahrenheitParaCelsius (50))

/* Desafio2: Cálculode IMC;
	- Crie um código que calcula o IMC
	- Fórmula
		=> IMC = peso / (altura * altura) */
function calculaIMC (peso, altura){
    return (peso / (altura * altura)).toFixed(2)
}

console.log (calculaIMC (80, 1.90))


/* Desafio3: Comparação de números
	- Crie um programa que compara números
	- Exibir uma mensagem se o primeiro número é maior, menor ou igual ao segundo
	- Utilizar variáveis e if/else */
function Comparacao(primeiro, segundo){
    if(primeiro > segundo){
        console.log(`O número ${primeiro} é maior que o número ${segundo}`)
    }else if(primeiro < segundo){
        console.log(`O número ${primeiro} é menor que o número ${segundo}`)
    }else{
        console.log('Os números são iguais')
    }
}
Comparacao(40,20)


/* Desafio4: Classificação de faixa etária;
	- Crie um programa que classifica o usuário com base na idade passada
	- Utilizar variáveis e if/else
	- Faixas etárias:
		=> Criança: 0-12 anos
		=> Adolescente: 13-17 anos
		=> Adulto: 18-59 anos
		=> Idoso: 60 anos ou mais */
function Faixa(idade){
    if(idade <= 12){
        console.log('Você é criança')
    }else if(idade <= 17 ){
        console.log('Você é adolescente')
    }else if(idade <= 59 ){
        console.log('Você é adulto')
    }else{
        console.log('Você é idoso')
    }
}
Faixa(1000)


/* Desafio5: Cálculo de Tarifas
	- Crie um programa que determine o valor da tarifa
	- O preço da tarifa normal é de R$2,50
	- Tarifas:
		=> Crianças menores que 6 anos: gratis
		=> Estudantes: 50% de desconto
		=> Idosos (60 anos ou mais): 30% de desconto
		=> Regular: tarifa normal */
function calculo(idade, carteirinha){
    if(idade <= 6){
        console.log('Gratuito')
    }
    else if(carteirinha){
        console.log(`Estudante, o valor da tarifa é R$${2.5 * 0.5}`)
    }
    else if(idade >= 60){
        console.log(`Idoso, o valor da tarifa é R$${2.5 * 0.7}`)
    }else{
        console.log('Tarifa Normal')
    }
}
calculo(60, false)

/* Desafio6: Tabuada;
	- Crie um programa que exiba a tabuada de um número específico
	- Urtilize as multiplicações do número de 1 ao 10
	- Utilizar estruturas de reperti */ 
function tabuada(numero){
    for(let multiplicador = 1; multiplicador <=10; multiplicador++){
        console.log(numero * multiplicador)
    }
}
tabuada(5)

////IMC

function classificaIMC (peso, altura){
    const imc = (peso /(altura * altura)).toFixed(2)

    console.log(imc)
    if(imc < 16.9){
        console.log('Muito abaixo do peso')
    }else if(imc <= 18.4){
        console.log('Abaixo do peso')
    }else if(imc <= 24.9) {
        console.log('Peso normal')
    }else if (imc <= 29.9){
        console.log('Acima do peso')
    }else if (imc <= 34.9){
        console.log('Obesidade grau I')
    }else if (imc <= 40){
        console.log('Obesidade grau II')
    }else{
        console.log('Obesidade grau III')
    }
}

classificaIMC(80, 1.90)