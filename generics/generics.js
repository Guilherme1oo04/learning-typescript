"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Generics - permite criar componentes ou funções reutilizáveis que podem trabalhar com diferentes tipos
// Neste exemplo é definido uma função genérica que pode receber qualquer tipo para array, utilizando a variável genérica "T"
const tamanhoArray = (array) => {
    return array.length;
};
const arrayNums = [3, 4, 7, 6, 4, 9];
console.log(tamanhoArray(arrayNums)); // Posso inferir o tipo do array na função
const arrayStrings = ["Casa", "Carro", "Computador"];
console.log(tamanhoArray(arrayStrings)); // Ou simplesmente deixar o typescript inferir automaticamente
const animalMaisVelho = (animal1, animal2) => {
    if (animal1.idade > animal2.idade) {
        return `${animal1.nome} é mais velho!`;
    }
    else if (animal1.idade == animal2.idade) {
        return `Ambos têm a mesma idade!`;
    }
    else {
        return `${animal2.nome} é mais velho!`;
    }
};
const cachorro = {
    nome: "Buddy",
    idade: 4,
};
const gato = {
    nome: "Whiskers",
    idade: 6,
};
console.log();
console.log(animalMaisVelho(cachorro, gato));
const exibeAlgo = (valor) => {
    console.log(valor);
};
console.log();
exibeAlgo(9);
exibeAlgo("Opa!");
exibeAlgo(true);
// exibeAlgo(["oi", "opa"]); => erro, array de strings não é um dos tipos permitidos
// Generics classes - são classes genéricas em que podemos definir o tipo que vamos utilizar
class Lista {
    constructor() {
        this.elementos = [];
    }
    verElementos() {
        return this.elementos;
    }
    adicionarItem(item) {
        this.elementos.push(item);
    }
    removerItem(item) {
        this.elementos.splice(this.elementos.indexOf(item));
    }
}
const listaNums = new Lista();
listaNums.adicionarItem(1);
listaNums.removerItem(0);
console.log(listaNums.verElementos());
class Estudante {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}
const estudante1 = new Estudante("Guilherme", 17);
const informacoes1 = {
    info1: "Guilherme",
    info2: "Chaves"
};
const fetchjson = async (url) => {
    const response = await fetch(url);
    const headers = {};
    response.headers.forEach((value, key) => {
        headers[key] = value;
    });
    const data = await response.json();
    return {
        data: data,
        status: response.status,
        statusText: response.statusText,
        headers
    };
};
console.log();
(async () => {
    const response = await fetchjson("https://jsonplaceholder.typicode.com/todos/1");
    console.log(response.data.userId);
    console.log(response.data.title);
})();
