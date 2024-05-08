/**
 * Calculadora de IMC
 * Para realizar o cálculo do IMC, é necessário informar o nome, a altura e o peso.
 * O cálculo é feito da seguinte forma: peso / (altura * altura)
 *
 * O resultado é classificado da seguinte forma:
 *  - Abaixo do peso: IMC menor que 18,5
 *  - Peso ideal: IMC entre 18,5 e 24,9
 *  - Levemente acima do peso: IMC entre 25 e 29,9
 *  - Obesidade grau I: IMC entre 30 e 34,9
 *  - Obesidade grau II: IMC entre 35 e 39,9
 *  - Obesidade grau III: IMC maior que 40
 *
 *  https://abeso.org.br/obesidade-e-sindrome-metabolica/calculadora-imc/
 */

const nomeC = document.getElementById("nome")
const alturaC = document.getElementById("altura")
const pesoC = document.getElementById("peso")

function Calcular(){
    var nome = nomeC.value
    var altura = parseFloat(alturaC.value)
    var peso = parseFloat(pesoC.value)
    var resultado

    resultado = (peso/(altura*2))
    document.getElementById("nome").textContent = nome
    // document.getElementById("resultado").textContent = resultado

    if(resultado < 18.5){
        document.getElementById("resultado").textContent = nome + " IMC:" + resultado.toFixed(2) + " Abaixo do peso."
    }
    else if(resultado >= 18.5 && resultado <= 24.9){
        document.getElementById("resultado").textContent = nome + " IMC:" + resultado.toFixed(2) + " Peso ideal."
    }
    else if(resultado >= 25 && resultado <= 29.9){
        document.getElementById("resultado").textContent = nome + " IMC:" + resultado.toFixed(2) + " Levemente acima do peso."
    }
    else if(resultado >= 30 && resultado <= 34.9){
        document.getElementById("resultado").textContent = nome + " IMC:" + resultado.toFixed(2) + " Obesidade grau I."
    }
    else if(resultado >= 35 && resultado <= 39.9){
        document.getElementById("resultado").textContent = nome + " IMC:" + resultado.toFixed(2) + " Obesidade grau II."
    }
    else if(resultado > 40){
        document.getElementById("resultado").textContent = nome + " IMC:" + resultado.toFixed(2) + " Obesidade grau III."
    }
}

function Limpar(){
    document.getElementById("nome").value = " "
    document.getElementById("peso").value = " "
    document.getElementById("altura").value = " "
    document.getElementById("resultado").textContent = " "
}

