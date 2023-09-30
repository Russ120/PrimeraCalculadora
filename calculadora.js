
'use strict';

function digito(valor){
    document.calculadora.preg.value+=valor;
}
function calcular(){
    document.calculadora.preg.value = eval(document.calculadora.preg.value);
}
function borrar(){
    document.calculadora.preg.value = document.calculadora.preg.value.slice(0, -1);
}
