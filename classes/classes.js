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
// Protected - Só permite que seja chamado dentro do escopo da classe e de outras classes através de heranças
class Estudante3 {
    constructor(nome, sala) {
        this.nome = nome;
        this.sala = sala;
    }
}
// A diferença do protected pro private é justamente que o protected permite ser chamado em escopos de heranças também
class Pessoa2 extends Estudante3 {
    constructor(nome, sala, idade) {
        super(nome, sala);
        this.idade = idade;
    }
    info() {
        return `Aluno: ${this.nome}, sala: ${this.sala}, idade: ${this.idade}.`;
    }
}
const pessoa2 = new Pessoa2("Guilherme", 8, 17);
console.log(pessoa2.info());
// Readonly - Não permite que modifique depois de criar
class Estudante4 {
    constructor(dataNascimento) {
        this.dataNascimento = dataNascimento;
    }
}
const pessoa3 = new Estudante4(new Date(2006, 2, 6));
// pessoa3.dataNascimento = new Date(2000, 2, 6); => Gera um erro porque o campo com readonly só permite que o valor seja atribuído uma vez
console.log(pessoa3.dataNascimento);
const pessoa4 = {
    nome: 'Guilherme',
    idade: 17,
};
// pessoa4 usa a interface Estudante5 e é totalmente imutável, todos os campos
// Static - Usado para informar algo que pertence à classe em si e não a um objeto da classe criada
class Funcionarios {
    constructor(nome, funcao) {
        this.nome = nome;
        this.funcao = funcao;
        Funcionarios.numeroFuncionarios++;
    }
    static qntFuncionarios() {
        return Funcionarios.numeroFuncionarios;
    }
    info() {
        return `Nome: ${this.nome}, Função: ${this.funcao}`;
    }
}
Funcionarios.numeroFuncionarios = 0;
// funcionario1 é um objeto da classe, mas ele não pode utilizar o método qntFuncionarios(), porque é um método estático, que nem a variável numeroFuncionarios, portanto só a classe em si pode utilizar
const funcionario1 = new Funcionarios("Guilherme", "JavaScript Developer");
console.log();
console.log(Funcionarios.qntFuncionarios());
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        this.raca = raca;
        Cachorro.qnt_cachorros_vendidos++;
    }
    get infoCachorro() {
        return `O nome do cachorro é: ${this.nome}, ele é da raça: ${this.raca}`;
    }
}
Cachorro.qnt_cachorros_vendidos = 0;
const cachorro1 = new Cachorro("Balestrini", ['Buldogue']);
console.log();
console.log(cachorro1.infoCachorro);
console.log(`Quantidade de cachorros vendida: ${Cachorro.qnt_cachorros_vendidos}`);
// Classes abstratas - elas são basicamente uma estrutura padrão que as classes filhas terão que seguir, não instanciadas no código
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    move(distancia) {
        console.log(`${this.nome} moveu-se ${distancia} metros.`);
    }
}
class Gato extends Animal {
    som() {
        console.log(`${this.nome} miando...`);
    }
}
// Neste exemplo a classe Gato segue a estrutura padrão da classe Animal, mudando somente o que a função abstrata som() irá fazer
const gato1 = new Gato("Folgado");
console.log();
gato1.move(10);
gato1.som();
