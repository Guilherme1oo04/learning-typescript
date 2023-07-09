"use strict";
// Objetos
let pessoa1;
pessoa1 = { nome: 'Guilherme Chaves', idade: 17 };
console.log(`Nome = ${pessoa1.nome}`);
console.log(`Idade = ${pessoa1.idade}`);
console.log(" ");
// Funções usando objetos como parâmetros
const bemVindo = (funcionario) => {
    console.log(`Bem Vindo ${funcionario.nome}!`);
};
bemVindo({ nome: "Guilherme Chaves" });
const funcao = (pessoa) => {
    console.log(`${pessoa.nome} trabalha como ${pessoa.funcao}.`);
};
funcao({ nome: "Guilherme Chaves", funcao: "Desenvolvedor full-stack" });
