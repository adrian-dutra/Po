const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");

function soma(){
    let n1 = numero1;
    let n2 = numero2;
    let resultado;

    resultado = (n1 + n2) * 2;

    document.getElementById("resultado").textContent = resultado;

}
soma();
console.log(resultado);
