export {};

// Interseção 
interface Pessoa {
    nome: string,
    cidade: string,
    profissao: string,
}
interface Endereco {
    nome: string,
    cidade: string,
    bairro: string,
    rua: string,
    numeroCasa: number,
}

// Está sendo criado um tipo que é a interseção das duas interfaces
type DadosPessoa = Endereco & Pessoa;

const pessoa1: DadosPessoa = {
    nome: "Guilherme",
    profissao: "Programador",
    bairro: "Bairro das Graças",
    rua: "Rua das Graças",
    numeroCasa: 455,
    cidade: "Cidade das Graças",
}


// Type Guards

// Typeof é usado para verificar o tipo de algum valor
const verificaNum = (valor: string | number) => {
    if (typeof valor == 'number'){
        return `${valor} é um número.`;
    } else {
        if (!isNaN(Number(valor))){
            return `${valor} é um número.`;
        } else {
            return `${valor} não é um número.`;
        }
    }
}
console.log(verificaNum("9"));

// Instaceof é usado para verificar se algum valor pertence à uma classe, como por exemplo a classe Date
const formataData = (valor: Date | string) => {
    if (valor instanceof Date){
        return valor.toUTCString;
    }

    return new Date(valor).toUTCString;
}

// O "In" é usado para verificar se uma propriedade existe em um objeto
interface Animal {
    grupo: string,
}

class Peixe implements Animal{
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string){
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal{
    grupo: string;
    corPena: string;

    constructor(grupo: string, corPena: string){
        this.grupo = grupo;
        this.corPena = corPena;
    }
}

const mover = (animal: Animal) => {
    if ("corPeixe" in animal){
        console.log(`${animal.grupo} nadam.`);
    } else if ("corPena" in animal){
        console.log(`${animal.grupo} voam.`);
    }
}

console.log();
mover(new Passaro("Pássaros", "Azul"));
mover(new Peixe("Peixes", "Azul"));


// O "As" é usado para converter uma variável de um tipo para outro, o as não realiza uma conversão real do valor em tempo de execução. Ele apenas informa ao compilador que você está tratando o valor como um tipo específico
console.log();
const num: any = "50407";
const numString = num as string;
console.log(numString.split("0"));


// Conditional types - é possível escolher entre um tipo ou outro para preencher algum campo
type DataNascimento = string;
type Idade = number;

// Utilizando o "T" pra informar que o tipo é genérico e verificando se o tipo é number ou string
type infoPessoa<T> = T extends number ? number : string;

const dataNasc: infoPessoa<DataNascimento> = '06/02/2006';
const idade: infoPessoa<Idade> = 17;