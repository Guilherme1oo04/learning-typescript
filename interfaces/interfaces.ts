export {};

// Interfaces simples
interface Funcionario {
    nome: string;
    funcao: string;
}

const exibeFuncionario = (funcionario: Funcionario) => {
    return ` Nome: ${funcionario.nome} \n Função: ${funcionario.funcao}`;
}

const funcionario1: Funcionario = {
    nome: 'Guilherme Chaves',
    funcao: "JavaScript developer",
}
console.log(exibeFuncionario(funcionario1));

// Propriedades opcionais em uma interface
interface Livro {
    titulo: string,
    paginas ?: number,
}

const livro1: Livro = {
    titulo: "Harry Potter e a câmara secreta"
}
const livro2: Livro = {
    titulo: "Harry Potter e o cálice de fogo",
    paginas: 500,
}
console.log();
console.log(livro1);
console.log(livro2);

// Interfaces com propriedades que não podem ser alteradas usando o readonly
interface Carro {
    readonly modelo: string,
    ano: number,
}

const carro1: Carro = {
    modelo: "Fusca",
    ano: 1969,
}
carro1.ano = 1949;
// carro1.modelo = 'Fusca 2'; => dará erro porque modelo não pode ser alterado
console.log();
console.log(carro1);

// Classes utilizando interfaces
interface Animal {
    nome: string,
    idade: number,
    comer(comida: string): void;
}

class Cachorro implements Animal{
    nome: string;
    idade: number;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string){
        console.log(`${this.nome} está comendo ${comida}.`);
    }
}
console.log();
const cachorro1 = new Cachorro("Igor3k", 30);
cachorro1.comer("Vape");

// Heranças de interfaces
interface Pessoa1 {
    nome: string,
}
interface Pessoa2 {
    idade: number,
}

interface Pessoa3 extends Pessoa1, Pessoa2 {
    altura: number,
}

const pessoa: Pessoa3 = {
    nome: "Gustavin7327",
    idade: 15,
    altura: 1.72,
}
console.log();
console.log(pessoa);

// Omit - é usado para omitir o tipo de alguma propriedade herdada de outra interface
interface Curso {
    id: number,
    curso: string,
}
interface Materia extends Omit<Curso, 'id'> {
    id: string,
    materia: string,
}
// Omit foi usado acima para permitir que o id fosse criado novamente

// Uso do "|" para permitir mais de algum valor, permitindo escolher entre um ou outro
interface Salarios {
    id: number,
    valor: number | string,
}
// Tanto number quanto string serão aceitos em valor