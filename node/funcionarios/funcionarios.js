
// no console, dentro da pasta do projeto, basta rodar o comando 'npm i' que as dependencias são instadalas.
// por isso não precisa enviar as dependencias para o repositorio (git)

const url ='http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const isMulher = funcionarios => funcionarios.genero === 'M'
const isDaChina = funcionarios => funcionarios.pais === 'China'
const menorSalario = (atual, proximo) => {
    if (atual.salario > proximo.salario){
        atual = proximo
    }
    
    return atual
}

axios.get(url).then(response => {
    const funcionarios = response.data
    
    console.log(funcionarios.filter(isMulher).filter(isDaChina).reduce(menorSalario))
})





