/* const nota = 50
const faltas = 30
const aulas = 40

function sala (){
    if(nota >= 50 && faltas <= 0.25 * aulas){
        console.log(`foi aprovado`)
    }else if(nota < 50 && faltas <= 0.25 * aulas ){
        console.log(`foi reprovado`)
    }
}

console.log(sala ()) */

function verificaAprovacao (notaAluno, faltasAlunos, aulasCursos, aluno){

    if(notaAluno >= 50 && faltasAlunos <= 0.25 * aulasCursos){
        console.log(`${aluno} foi Aprovada`)
    }else{
        console.log(`${aluno} foi Reprovada`)
    }
}

verificaAprovacao(50, 10, 40, 'Tini')//Aprovada
verificaAprovacao(70, 15, 40, 'Ariana')//Aprovada