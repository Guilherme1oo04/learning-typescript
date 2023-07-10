"use strict";
// Função nomeada
function somarNumeros(a, b) {
    return a + b;
}
// Constante recebendo função
const subtraiNumeros = function (a, b) {
    return a - b;
};
// Arrow Function
const multiplicaNumeros = (a, b) => {
    return a * b;
};
// Function constructor
const mostraMensagem = new Function('mensagem', 'return `Fala ${mensagem}`');
console.log(mostraMensagem("Meu bom!"));
