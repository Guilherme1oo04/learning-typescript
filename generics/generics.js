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
