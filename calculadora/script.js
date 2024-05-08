// Descrição: Script para a calculadora
/**
 * Neste exercício você deverá implementar a lógica de uma calculadora (com JS).
 * Para isso é provido um conjunto de arquivos-base e você deverá trabalhar no somente
 * no arquivo "script.js". Ele contém comentários indicando o que deve ser feito, mas vocês
 * são livres para modificar e adotar uma estrutura própria.
 *
 * A calculadora deve possuir as seguintes funcionalidades:
 * - Adição de números
 * - Subtração de números
 * - Multiplicação de números
 * - Divisão de números
 * - Limpar o visor
 * - Inverter o sinal do número
 * - Deletar o último caractere
 * - Exibir o resultado da operação
 * - Evitar que o usuário digite dois operadores seguidos
 * - Evitar que o usuário digite um operador no início da operação
 * - Evitar que o usuário divida um número por zero
 * - Evitar que o usuário digite mais de um ponto em um número
 * - Evitar que o usuário digite mais de um zero no início de um número
 * - Evitar que o usuário digite mais de um operador no início da operação
 * - Evitar que o usuário digite mais de um operador no final da operação
 */

// Declaração de variáveis globais:
// - elementoResultado: representa o visor da calculadora
// - botaoAC: botão que limpa o visor
// - botaoMaisMenos: botão que inverte o sinal do número
// - botaoDeletar: botão que deleta o último caractere
// - botoesPadroes: botões que representam os números e operadores da calculadora
// - botaoResultado: botão que exibe o resultado da operação
// Dica 1: Utilize o método querySelector para selecionar os elementos do HTML pelo nome da classe

const elementoResultado = document.querySelector('.js-resultado');
const botaoAC = document.querySelector('.js-btn-ac');
const botaoMaisMenos = document.querySelector('.js-btn-mais-menos');
const botaoDeletar = document.querySelector('.js-btn-del');
const botoesPadroes = document.querySelectorAll('.js-btn-padroes');
const botaoResultado = document.querySelector('.js-btn-igual');

let operadorAnterior = '';
let operadorAtual = '';
let numeroAtual = '';
let resultado = '';
let operadorPressionado = false;

function adicionarAoVisor(valor){
    elementoResultado.value += valor;
    if (!isNaN(parseInt(valor))){
        numeroAtual += valor;
        operadorPressionado = false;
    }else{
        operadorAtual = valor;
        operadorPressionado = true;
    }
}

function verificaOperadorSeguido(){
    return operadorAnterior && operadorAtual && operadorPressionado;
}

function verificaPonto(valor){
    return valor === '.' && numeroAtual.includes('.');
}

function verificaZeroInicial(valor){
    return numeroAtual === '0' && valor === '0';
}

function verificaOperadorInicial(valor){
    return !numeroAtual && (valor === '+' || valor === '-' || valor === '*' || valor === '/');
}

function verificaOperadorFinal(valor){
    return operadorPressionado && (!numeroAtual || numeroAtual === '0');
}

function inverterSinal(){
    if (numeroAtual !== ''){
        numeroAtual = (parseFloat(numeroAtual) * -1).toString();
        elementoResultado.value = numeroAtual;
    }
}

function deletarUltimoCaractere(){
    elementoResultado.value = elementoResultado.value.slice(0, -1);
    if (numeroAtual !== ''){
        numeroAtual = numeroAtual.slice(0, -1);
        operadorPressionado = isNaN(parseInt(numeroAtual[numeroAtual.length - 1]));
    }
}

function exibirResultado(){
    if (!verificaOperadorSeguido()){
        resultado = eval(elementoResultado.value);
        if (isNaN(resultado) || !isFinite(resultado)){
            elementoResultado.value = 'Erro';
        } else {
            elementoResultado.value = resultado;
        }
        operadorAnterior = '';
        operadorAtual = '';
        numeroAtual = resultado.toString();
        operadorPressionado = false;
    }
}

botoesPadroes.forEach(botao => {
    botao.addEventListener('click', function(event){
        const valorBotao = event.target.getAttribute('data-valor');
        if (valorBotao){
            if (valorBotao === 'AC'){
                elementoResultado.value = '';
                operadorAnterior = '';
                operadorAtual = '';
                numeroAtual = '';
                resultado = '';
                operadorPressionado = false;
            } else if (valorBotao === '+/-'){
                inverterSinal();
            } else if (valorBotao === 'Del'){
                deletarUltimoCaractere();
            } else if (valorBotao === '='){
                exibirResultado();
            } else {
                if (!verificaOperadorSeguido()&&
                    !verificaPonto(valorBotao)&&
                    !verificaZeroInicial(valorBotao)&&
                    !verificaOperadorInicial(valorBotao)&&
                    !verificaOperadorFinal(valorBotao)){
                    adicionarAoVisor(valorBotao);
                }
            }
        }
    });
});

botaoAC.addEventListener('click', () => {
    elementoResultado.value = '';
    operadorAnterior = '';
    operadorAtual = '';
    numeroAtual = '';
    resultado = '';
    operadorPressionado = false;
});

botaoMaisMenos.addEventListener('click', () => {
    inverterSinal();
});

botaoDeletar.addEventListener('click', () => {
    deletarUltimoCaractere();
});

botaoResultado.addEventListener('click', () => {
    exibirResultado();
});