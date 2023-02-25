const students = [
  {
    name: 'João',
    firstTestResult: 10,
    secondTestResult: 7
  },
  {
    name: 'Letícia',
    firstTestResult: 5,
    secondTestResult: 6
  },
  {
    name: 'Diego',
    firstTestResult: 4,
    secondTestResult: 9
  },
  {
    name: 'Julia',
    firstTestResult: 8,
    secondTestResult: 3
  }
]


function calcAverage (student) {
  let testsSum = student.firstTestResult + student.secondTestResult
  let testsAverage = testsSum / 2

  if(testsAverage >= 7){
    alert(`A média do(a) aluno(a) ${student.name} é ${testsAverage} \n Parabéns, ${student.name}, você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é ${testsAverage} \n Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}

for (let student of students) {
  calcAverage(student)
}


