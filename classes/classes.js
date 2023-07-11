"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Classe com constructor
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
const pessoa = new Pessoa('Guilherme', 'Chaves');
console.log(pessoa.nomeCompleto());
// Modificadores de acesso
// Public - é o que é definido por padrão nas classes quando você não especifica
// Permite acessar de qualquer lugar do código
class Estudante1 {
    constructor(nome, sala) {
        this.nome = nome;
        this.sala = sala;
    }
}
const estudante1 = new Estudante1("Guilherme Chaves", 8);
console.log(estudante1.nome); // Por ser um atributo público, é possível chamar ele fora do escopo da classe
// Private - Só permite que seja chamado dentro do escopo que foi definido
class Estudante2 {
    constructor(nome, sala) {
        this.nome = nome;
        this.sala = sala;
    }
    // É possível chamar os campos nome e sala nesse método por que o método está dentro do escopo da classe
    info() {
        return `Aluno: ${this.nome}, sala: ${this.sala}.`;
    }
}
const estudante2 = new Estudante2("Guilherme", 8);
// console.log(estudante2.nome); => Esse código não é possível ser executado porque o campo nome não pode ser chamado fora do escopo
console.log(estudante2.info()); // Esse funcionará porque o metódo info() é público e poderá ser chamado fora do escopo
