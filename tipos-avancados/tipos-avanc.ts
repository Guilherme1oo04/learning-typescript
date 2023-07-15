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
type infoPessoa<T> = T extends number ? Idade : DataNascimento;

const dataNasc: infoPessoa<DataNascimento> = '06/02/2006';
const idade: infoPessoa<Idade> = 17;


type arquivosPermitidos = "mp3" | "wav";

const formataAudio = (audio: arquivosPermitidos) => {
    console.log(audio);
}
// formataAudio("mp4"); => Erro porque esse tipo não é uma das condições que pode ser recebida
formataAudio("wav");


// Mapped types - permite criar novos tipos com base em um tipo existente. Eles permitem que você itere sobre as propriedades de um tipo e as modifique de acordo com suas necessidades

// Neste exemplo todos os parâmetros de Pessoa2 são recriados os mudando para opcionais
type Pessoa2 = {
    nome: string;
    idade: number;
    email: string;
}
type Pessoa2Opcional = {
    [K in keyof Pessoa2]?: Pessoa2[K];
}

// Neste exemplo o ForIn de CarroOpcional verifica se "C" é "marca", se for ele transforma em um parâmetro obrigatório, se não ele torna opcional dando a opção de ser undefined
type Carro = {
    marca: string;
    ano: number;
    cor: string;
}
type CarroOpcional = {
    readonly [C in keyof Carro]?: C extends "marca" ? Carro[C] : Carro[C] | undefined;
}


// Satisfies Operator - é usado para verificar se um tipo é compatível com uma interface ou type. Ele permite verificar se um objeto possui todas as propriedades e métodos definidos em uma interface ou type específico
interface Animal2 {
    name: string;
    age: number;
    sound(): void;
}
class Dog {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sound() {
    console.log("Woof!");
  }
}

class Cat {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sound() {
    console.log("Meow!");
  }
}

const makeSound = (animal: Animal2) => {
    animal.sound();
}

const dog = new Dog("Buddy", 3);
const cat = new Cat("Whiskers", 5);

console.log();
makeSound(dog); // Output: Woof!
makeSound(cat); // Output: Meow!

const verificaSatisfies = (animal: Animal2) => {
    if (animal satisfies Animal2) {
        console.log(animal);
    } else {
        console.log("Não é do tipo dog!")
    }
}
verificaSatisfies(dog);
verificaSatisfies(cat);