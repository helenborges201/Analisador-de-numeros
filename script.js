//Array com os valores cadastrados
let listaNumeros = []

let resultado = document.getElementById('resultado')

//Adicionando Números
function AdicionarNumero() {
    let numero = (document.getElementById("numero").value)
    //Tornando número obrigatório, menor que 100, maior que 1 e não permitindo números já adicionados
    if (numero.length == 0 || numero > 100 || numero < 1 || listaNumeros.indexOf(numero) != -1 ) {
    alert("[ERRO] Número Invalido ou Ja Foi Encontrado")
    }else {
        for (let i = 0; i < parseInt(numero.length); i += (numero) ) {
            listaNumeros.push(numero)
            let select = document.getElementById("valorAdicionado")
            let option = document.createElement('option')  
            option.text = `Valor ${numero} adicionado`
            select.appendChild(option)
            console.log(listaNumeros)

            //Removendo resultado se o usuario adicionar um número depois de finalizar 
            if (resultado != undefined)
                resultado.innerHTML = ""
        }
    } 
}


//mostrando resultado 
function Finalizar() {  
        resultado.innerHTML =`<p>Ao todo temos, ${listaNumeros.length} números cadastrado.</p>`
        
        var maiorValor = Math.max.apply(null, listaNumeros)
        resultado.innerHTML += `<p>O maior valor informado é ${maiorValor}.</p> `
       

        var menorValor = Math.min.apply(null, listaNumeros)
        resultado.innerHTML += `<p>O menor valor informado é ${menorValor}.</p>`
        
        let soma = 0
        for (let i = 0; i < listaNumeros.length; i++) {
        soma += parseInt(listaNumeros[i])
        }
     
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`

        let media = soma / listaNumeros.length
        resultado.innerHTML += `<p>A media dos valores digitados é ${media}.</p>`
    
} 
