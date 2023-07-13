"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pessoa1 = {
    nome: "Guilherme",
    profissao: "Programador",
    bairro: "Bairro das Graças",
    rua: "Rua das Graças",
    numeroCasa: 455,
    cidade: "Cidade das Graças",
};
// Type Guards
// Typeof é usado para verificar o tipo de algum valor
const verificaNum = (valor) => {
    if (typeof valor == 'number') {
        return `${valor} é um número.`;
    }
    else {
        if (!isNaN(Number(valor))) {
            return `${valor} é um número.`;
        }
        else {
            return `${valor} não é um número.`;
        }
    }
};
console.log(verificaNum("9"));
// Instaceof é usado para verificar se algum valor pertence à uma classe, como por exemplo a classe Date
const formataData = (valor) => {
    if (valor instanceof Date) {
        return valor.toUTCString;
    }
    return new Date(valor).toUTCString;
};
