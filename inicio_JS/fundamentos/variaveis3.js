//variáveis do tipo array
const alunosTurmaWeb = ['Tini', 'Ariana', 'Frank', 'SZA', 'Tyler']
const notasTurmaWeb = [8.5, 4, 6.5, 9, 7]
const alunosENotas = [alunosTurmaWeb, notasTurmaWeb]

//acrescentando valores ao array
//alunosTurmaWeb.push('Kali', 'Taylor')//acrescenta valores no final do array
//alunosTurmaWeb.splice(1,1)//remove um ou mais valores em um ponto específico
//alunosTurmaWeb.splice(0,0, 'Ariana')//acrescenta valores em um ponto específico


//console.table(alunosTurmaWeb)
//console.table(alunosTurmaWeb[2])

console.log(alunosENotas[0][1])

//Retornar nome e nota de aluno índice 1
console.log(`O nome do aluno no índice 1 é ${alunosENotas[0][1]}
a sua nota é ${alunosENotas[1][1]}`)