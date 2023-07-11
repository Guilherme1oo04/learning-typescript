"use strict";
// Get serve para pegar algum valor da classe ou objeto
// Set serve para alterar algum valor da classe ou objeto
// Normalmente no Typescript esses métodos get e set são usados implicitamente no código, sem precisarmos declará-los
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }
    get area() {
        return this.largura * this.altura;
    }
}
const retangulo1 = new Retangulo(4, 4);
console.log(retangulo1.area);
class Estudante {
    constructor(nome, semestre, curso) {
        this.nome = nome;
        this.curso = curso;
        this.semestre = semestre;
    }
    get getCurso() {
        return this.curso;
    }
    set mudaCurso(curso) {
        this.curso = curso;
    }
}
const estudante1 = new Estudante("Guilherme", 1, "Ciência da computação");
estudante1.mudaCurso = 'Análise e Desenvolvimento de Sistemas';
console.log(estudante1.getCurso);
