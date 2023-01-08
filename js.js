const form = document.querySelector('form')
const input  = document.querySelectorAll('input')
const result = document.querySelector('.result')
let score  = 0    
let totalScore =0

const showResult = event=>{
    event.preventDefault()

input.forEach(checado =>{

const condiction = checado.checked && checado.value ==='B'

if (condiction) {
        score ++
        totalScore =score * 25

        result.textContent = `
        Você acertou ${score} !!!
        O rendimento foi de  ${totalScore}%
        `
    }

    if(score === 0 )
    result.textContent =`
    VOCÊ NAO ACERTOU NADA TENTE NOVAMENTE :(
    `

})

score  = 0 

}

form.addEventListener('submit' , showResult )
