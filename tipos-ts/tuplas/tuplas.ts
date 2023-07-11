export {};

// Tuplas
let pessoa2: [string, string, number];
pessoa2 = ['Guilherme Chaves', 'Desenvolvedor FullStack', 17];
console.log(pessoa2[1])

// Tuplas com speed operator
let frutas: [string, ... string[]] = ['maça', 'goiaba', 'pera', 'abacaxi'];
console.log(... frutas)

// Tuplas com labels
let pessoa3: [nome: string, idade: number];
pessoa3 = ['Guilherme', 17];

// Tuplas com tipos diferentes
let frutas2: [number, boolean, ... string[]] = [4, true, ... frutas];
console.log(frutas2);

function juntaTuplas(nomes: string[], idades: number[]){
    return [... nomes, ... idades]
}

// Criando duas formas de colocar parâmetros em uma função
type Nome = 
    | [primeiroNome: string, sobrenome: string]
    | [primeiroNome: string, nomeDoMeio: string, sobrenome: string]

function criarPessoa(... nome: Nome){
    return [... nome];
}
console.log(criarPessoa('Guilherme', 'Chaves'));
console.log(criarPessoa('Guilherme', 'da Silva', 'Chaves'));
