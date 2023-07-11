export{}; // Evitar conflito de nomes iguais em outros arquivos

// Classe com constructor
class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(){
        return `${this.nome} ${this.sobrenome}`;
    }
}

const pessoa = new Pessoa('Guilherme', 'Chaves');
console.log(pessoa.nomeCompleto());

// Modificadores de acesso

// Public - é o que é definido por padrão nas classes quando você não especifica
// Permite acessar de qualquer lugar do código
class Estudante1 {
    // Tanto nome quanto sala são públicos
    public nome: string;
    sala: number;

    constructor(nome: string, sala: number){
        this.nome = nome;
        this.sala = sala;
    }
}
const estudante1 = new Estudante1("Guilherme Chaves", 8);
console.log(estudante1.nome); // Por ser um atributo público, é possível chamar ele fora do escopo da classe


// Private - Só permite que seja chamado dentro do escopo que foi definido
class Estudante2 {
    private nome: string;
    private sala: number;

    constructor(nome: string, sala: number){
        this.nome = nome;
        this.sala = sala;
    }

    // É possível chamar os campos nome e sala nesse método por que o método está dentro do escopo da classe
    info() {
        return `Aluno: ${this.nome}, sala: ${this.sala}.`
    }
}
const estudante2 = new Estudante2("Guilherme", 8);

// console.log(estudante2.nome); => Esse código não é possível ser executado porque o campo nome não pode ser chamado fora do escopo

console.log(estudante2.info()); // Esse funcionará porque o metódo info() é público e poderá ser chamado fora do escopo


// Protected - Só permite que seja chamado dentro do escopo da classe e de outras classes através de heranças
class Estudante3 {
    protected nome: string;
    protected sala: number;

    constructor(nome: string, sala: number){
        this.nome = nome;
        this.sala = sala;
    }
}
// A diferença do protected pro private é justamente que o protected permite ser chamado em escopos de heranças também
class Pessoa2 extends Estudante3{
    private idade: number;

    constructor(nome: string, sala: number, idade: number){
        super(nome, sala);
        this.idade = idade;
    }

    info() {
        return `Aluno: ${this.nome}, sala: ${this.sala}, idade: ${this.idade}.`
    }
}
const pessoa2 = new Pessoa2("Guilherme", 8, 17);
console.log(pessoa2.info());


// Readonly - Não permite que modifique depois de criar
class Estudante4 {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date){
        this.dataNascimento = dataNascimento;
    }
}
const pessoa3 = new Estudante4(new Date(2006, 2, 6));

// pessoa3.dataNascimento = new Date(2000, 2, 6); => Gera um erro porque o campo com readonly só permite que o valor seja atribuído uma vez
console.log(pessoa3.dataNascimento);

interface Estudante5 {
    nome: string;
    idade: number;
}
const pessoa4: Readonly<Estudante5> = {
    nome: 'Guilherme',
    idade: 17,
}
// pessoa4 usa a interface Estudante5 e é totalmente imutável, todos os campos