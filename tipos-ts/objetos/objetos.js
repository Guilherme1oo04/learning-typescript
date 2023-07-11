"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const linguagensPreferidas = (pessoa) => {
    return `As lingaugens preferidas de ${pessoa.nome} são: ${pessoa.linguagens}.`;
};
console.log(linguagensPreferidas({ nome: "Guilherme", linguagens: "Python, JavaScript" }));
const mostraEmail = (pessoa) => {
    if (pessoa.email == undefined) {
        console.log(`${pessoa.nome} não preencheu o e-mail!`);
    }
    else {
        console.log(`${pessoa.nome} preencheu o e-mail!`);
    }
};
console.log(" ");
mostraEmail({ nome: "Guilherme" });
mostraEmail({ nome: "Guilherme", email: "blabla@gmail.com" });
const filho1 = { nome: "Guilherme", sobrenome: "Chaves", idade: 17 };
console.log(" ");
console.log(filho1);
const usuario1 = { nome: "Guilherme Chaves", email: "guichaves.com" };
const adm1 = { nome: "Guilherme Chaves", email: "guichaves.com", admin: true };
// Esta função aceitará qualquer type como parâmetro, esse T é convenção de uso para generics
const acessarSistema = (usuario) => {
    return usuario;
};
console.log(acessarSistema(usuario1));
console.log(acessarSistema(adm1));
