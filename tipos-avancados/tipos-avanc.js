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
class Peixe {
    constructor(grupo, corPeixe) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}
class Passaro {
    constructor(grupo, corPena) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}
const mover = (animal) => {
    if ("corPeixe" in animal) {
        console.log(`${animal.grupo} nadam.`);
    }
    else if ("corPena" in animal) {
        console.log(`${animal.grupo} voam.`);
    }
};
console.log();
mover(new Passaro("Pássaros", "Azul"));
mover(new Peixe("Peixes", "Azul"));
// O "As" é usado para converter uma variável de um tipo para outro, o as não realiza uma conversão real do valor em tempo de execução. Ele apenas informa ao compilador que você está tratando o valor como um tipo específico
console.log();
const num = "50407";
const numString = num;
console.log(numString.split("0"));
const dataNasc = '06/02/2006';
const idade = 17;
