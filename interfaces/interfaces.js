"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exibeFuncionario = (funcionario) => {
    return ` Nome: ${funcionario.nome} \n Função: ${funcionario.funcao}`;
};
const funcionario1 = {
    nome: 'Guilherme Chaves',
    funcao: "JavaScript developer",
};
console.log(exibeFuncionario(funcionario1));
const livro1 = {
    titulo: "Harry Potter e a câmara secreta"
};
const livro2 = {
    titulo: "Harry Potter e o cálice de fogo",
    paginas: 500,
};
console.log();
console.log(livro1);
console.log(livro2);
const carro1 = {
    modelo: "Fusca",
    ano: 1969,
};
carro1.ano = 1949;
// carro1.modelo = 'Fusca 2'; => dará erro porque modelo não pode ser alterado
console.log();
console.log(carro1);
class Cachorro {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    comer(comida) {
        console.log(`${this.nome} está comendo ${comida}.`);
    }
}
console.log();
const cachorro1 = new Cachorro("Igor3k", 30);
cachorro1.comer("Vape");
