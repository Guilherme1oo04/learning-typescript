export {};

// Generics - permite criar componentes ou funções reutilizáveis que podem trabalhar com diferentes tipos

// Neste exemplo é definido uma função genérica que pode receber qualquer tipo para array, utilizando a variável genérica "T"
const tamanhoArray = <T>(array: T[]) => {
    return array.length;
}

const arrayNums: number[] = [3, 4, 7, 6, 4, 9];
console.log(tamanhoArray<number>(arrayNums)); // Posso inferir o tipo do array na função

const arrayStrings: string[] = ["Casa", "Carro", "Computador"];
console.log(tamanhoArray(arrayStrings)); // Ou simplesmente deixar o typescript inferir automaticamente


// Generics constraints - são usadas para impor restrições sobre os tipos que podem ser usados como argumentos genéricos em uma função, classe ou interface. Elas permitem especificar que um tipo genérico deve atender a certos critérios para ser válido

// Neste exemplo a função animalMaisVelho() aceita somente parâmetros que sejam como a interface Animal
interface Animal {
    nome: string;
    idade: number;
}

const animalMaisVelho = <T extends Animal>(animal1: T, animal2: T) => {
    if (animal1.idade > animal2.idade){
        return `${animal1.nome} é mais velho!`;
    } else if (animal1.idade == animal2.idade){
        return `Ambos têm a mesma idade!`
    } else {
        return `${animal2.nome} é mais velho!`;
    }
}

const cachorro: Animal = {
    nome: "Buddy",
    idade: 4,
}
const gato: Animal = {
    nome: "Whiskers",
    idade: 6,
}

console.log();
console.log(animalMaisVelho(cachorro, gato));

type tiposPermitidos = string | number | boolean;

const exibeAlgo = <T extends tiposPermitidos>(valor: T) => {
    console.log(valor);
}

console.log();
exibeAlgo(9);
exibeAlgo("Opa!");
exibeAlgo(true);
// exibeAlgo(["oi", "opa"]); => erro, array de strings não é um dos tipos permitidos


// Generics classes - são classes genéricas em que podemos definir o tipo que vamos utilizar

class Lista<T> {
    private elementos: T[];

    constructor(){
        this.elementos = [];
    }

    public verElementos(){
        return this.elementos;
    }

    public adicionarItem(item: T){
        this.elementos.push(item);
    }

    public removerItem(item: T){
        this.elementos.splice(this.elementos.indexOf(item));
    }
}
const listaNums = new Lista<number>();
listaNums.adicionarItem(1);
listaNums.removerItem(0);
console.log(listaNums.verElementos());

class Estudante<T, U> {
    public nome: T;
    public idade: U;

    constructor(nome: T, idade: U){
        this.nome = nome;
        this.idade = idade
    }
}
const estudante1 = new Estudante<string, number>("Guilherme", 17);


// Generic interfaces - funciona como classes genéricas basicamente
interface Informacoes<T, U> {
    info1: T;
    info2: U;
}
const informacoes1: Informacoes<string, string> = {
    info1: "Guilherme",
    info2: "Chaves"
}

// Criando uma função de fetch utilizando generics interfaces
interface FetchResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
}
const fetchjson = async <T>(url: string): Promise<FetchResponse<T>> => {
    const response = await fetch(url);
    const headers: Record<string, string> = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });

    const data = await response.json();

    return {
        data: data as T,
        status: response.status,
        statusText: response.statusText,
        headers
    }
}

console.log();

(async () => {
    const response = await fetchjson<{title: string, userId: number, id: number, completed: boolean}>("https://jsonplaceholder.typicode.com/todos/1");

    console.log(response.data.userId)
    console.log(response.data.title);
})();
