"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tuplas
let pessoa2;
pessoa2 = ['Guilherme Chaves', 'Desenvolvedor FullStack', 17];
console.log(pessoa2[1]);
// Tuplas com speed operator
let frutas = ['maça', 'goiaba', 'pera', 'abacaxi'];
console.log(...frutas);
// Tuplas com labels
let pessoa3;
pessoa3 = ['Guilherme', 17];
// Tuplas com tipos diferentes
let frutas2 = [4, true, ...frutas];
console.log(frutas2);
function juntaTuplas(nomes, idades) {
    return [...nomes, ...idades];
}
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Guilherme', 'Chaves'));
console.log(criarPessoa('Guilherme', 'da Silva', 'Chaves'));
