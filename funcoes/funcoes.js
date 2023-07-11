"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// Parâmetros opcionais 
// Uso do "?" antes para definir como opcional
const preencheEmail = (nome, email) => {
    if (email != undefined) {
        console.log(`O e-mail de ${nome} é: ${email}`);
    }
    else {
        console.log(`${nome} não preencheu o e-mail!`);
    }
};
preencheEmail("Guilherme");
const mensagemLog = (mensagem, idUser) => {
    const horaLog = new Date().toLocaleTimeString();
    console.log(horaLog, mensagem, idUser || "Usuário não logado!");
};
console.log();
mensagemLog("Usuário logado com sucesso!", 8888);
mensagemLog("Atualizar página!");
// Default parameters
// Funciona como parâmetros opcionais, com a diferença de que podemos definir algum valor além de undefined para o parâmetro opcional
const msgBemVindo = (pessoa, mensagem = "Bem vindo(a)") => {
    console.log(`${mensagem} ${pessoa}!`);
};
console.log();
msgBemVindo("Guilherme");
msgBemVindo("Guilherme", "Fala meu mano");
// Rest parameters
// Permite passar quantos parâmetros quiser em uma função, desde que sejam do mesmo tipo
const somarNumeros2 = (...numeros) => {
    let total = 0;
    numeros.forEach((numero) => (total += numero));
    return total;
};
console.log();
console.log(somarNumeros2(50, 50, 80, 97, 44, 32, 17, 30));
const comprarFrutas = (pessoa, ...frutas) => {
    console.log(`${pessoa} precisa ir na feira comprar: ${frutas.join(', ')}.`);
};
console.log();
comprarFrutas("Guilherme", "maçã", "banana", "abacaxi", "uva");
