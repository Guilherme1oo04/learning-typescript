export{};

// Objetos
let pessoa1: {
    nome: string;
    idade: number
};

pessoa1 = {nome: 'Guilherme Chaves', idade: 17};
console.log(`Nome = ${pessoa1.nome}`);
console.log(`Idade = ${pessoa1.idade}`);
console.log(" ");

// Funções usando objetos como parâmetros
const bemVindo = (funcionario: {nome: string}) => {
    console.log(`Bem Vindo ${funcionario.nome}!`)
}
bemVindo({nome: "Guilherme Chaves"});

// Interfaces
interface Pessoa {
    nome: string;
    funcao: string
}

const funcao = (pessoa: Pessoa) => {
    console.log(`${pessoa.nome} trabalha como ${pessoa.funcao}.`);
}
funcao({nome: "Guilherme Chaves", funcao: "Desenvolvedor full-stack"});

// Types
type Pessoa2 = {
    nome: string;
    linguagens: string;
}

const linguagensPreferidas = (pessoa: Pessoa2) => {
    return `As lingaugens preferidas de ${pessoa.nome} são: ${pessoa.linguagens}.`;
}
console.log(linguagensPreferidas({nome: "Guilherme", linguagens: "Python, JavaScript"}));

// Valores opcionais em objetos
interface Pessoa4 {
    nome: string;
    email?: string;
}
const mostraEmail = (pessoa: Pessoa4) => {
    if (pessoa.email == undefined){
        console.log(`${pessoa.nome} não preencheu o e-mail!`);
    } else{
        console.log(`${pessoa.nome} preencheu o e-mail!`);
    }
}

console.log(" ");
mostraEmail({nome: "Guilherme"});
mostraEmail({nome: "Guilherme", email: "blabla@gmail.com"});

// Readonly - usado para não permitir que uma propriedade seja reatribuída
interface Pessoa5 {
    nome: string;
    readonly email: string;
}

// Heranças
interface Pai {
    sobrenome: string;
}
interface Filho extends Pai {
    nome: string;
    idade: number;
}

const filho1: Filho = {nome: "Guilherme", sobrenome: "Chaves", idade: 17};
console.log(" ");
console.log(filho1);

// Interseções
type Cachorro = {
    raca: string;
}
type Gato = {
    raca: string;
}

type Animal = Cachorro & Gato;

// Generic objects

type Usuario = {
    nome: string;
    email: string;
}
type Admin = {
    nome: string;
    email: string;
    admin: boolean;
}

const usuario1: Usuario = {nome: "Guilherme Chaves", email: "guichaves.com"};
const adm1: Admin = {nome: "Guilherme Chaves", email: "guichaves.com", admin: true};

// Esta função aceitará qualquer type como parâmetro, esse T é convenção de uso para generics
const acessarSistema = <T>(usuario: T) => { 
    return usuario;
}

console.log(acessarSistema(usuario1));
console.log(acessarSistema(adm1));