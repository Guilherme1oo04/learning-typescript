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

interface Pessoa {
    nome: string;
    funcao: string
}

const funcao = (pessoa: Pessoa) => {
    console.log(`${pessoa.nome} trabalha como ${pessoa.funcao}.`)
}
funcao({nome: "Guilherme Chaves", funcao: "Desenvolvedor full-stack"});