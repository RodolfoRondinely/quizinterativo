/* const name =  'Rodolfo'
console.log(name);

const family = ['rodolfo','enzo','isabela']
console.log(family);
family.push('bolinha')
console.log(family);
console.log(family.length)
console.log(family[0].slice(0,4)+family[1].slice(0.3));
console.log(family.indexOf('isabela'));

 */


const form = document.querySelector('form')
const input  = document.querySelectorAll('input')
const result = document.querySelector('.container-sm')
let score  = 0    

const showResult = event=>{
    event.preventDefault()

input.forEach(checado =>{

const condiction = checado.checked & checado.value ==='B'

    if (condiction) {
        score ++

        result.textContent = `
        Você acertou ${score} questão
        o rendimento foi de  ${score * 25}%
        `
        return
    }

    if(score === 0 )
    result.textContent =`
    VOCÊ NAO ACERTOU NADA TENTE NOVAMENTE :(
    `

})

score  = 0 

}

form.addEventListener('submit' , showResult )
