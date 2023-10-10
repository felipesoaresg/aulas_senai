const nomeAluno = 'Ariana'
const mediaAluno = 45
const faltasAlunos = 40

const aulasCurso = 45

//para quando o aluno seja aprovado a média deve ser maior ou igual a 50
//e (&&) quantidade de faltas menor ou igual a 25% do total de aulas do curso

if(mediaAluno >= 50 && faltasAlunos <= 0.25 * aulasCurso){
    console.log(`${nomeAluno} foi aprovado`)
}else if(mediaAluno < 50){
    console.log(`${nomeAluno} foi reprovado por nota`)
}else{
    console.log(`${nomeAluno} foi reprovado por falta`)
}


/* if(mediaAluno >= 50 && faltasAlunos <= 0.25 * aulasCurso){
    console.log(`${nomeAluno} foi aprovado`)
}else{
    if(mediaAluno < 50){
    console.log(`reprovado por nota`)
    }
} */