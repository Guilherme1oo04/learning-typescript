"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiplicar = exports.somar = void 0;
function somar(...numeros) {
    let soma = 0;
    for (const num of numeros) {
        soma = soma + num;
    }
    return soma;
}
exports.somar = somar;
function multiplicar(...numeros) {
    let multiplicacao = 1;
    for (const num of numeros) {
        multiplicacao = multiplicacao * num;
    }
    return multiplicacao;
}
exports.multiplicar = multiplicar;
