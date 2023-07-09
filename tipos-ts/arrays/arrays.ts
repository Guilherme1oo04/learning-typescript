// Arrays
// Jeito 1
let animais: string[] = ['Cachorro', 'Gato', 'CAVALO'];

// Jeito 2 - comumente usado em libs e frameworks
let animais2: Array<string> = ['Panda', 'Coala', 'Golfinho'];
let numeros: Array<number> = [0, 1, 2, 3, 4, 5];

// Adicionando elementos no array
numeros.push(6);
animais2.push('Capivara');

// Comprimento do array
console.log(animais2.length);

// Spread Operator
animais = [... animais, 'Jumento'];

// Juntando dois arrays
//Usando for
const juntaArrays = (array1: string[], array2: string[]) => {
    for (let index = 0; index < array2.length; index++) {
        array1.push(array2[index]);
    }
    return array1
}
console.log(juntaArrays(animais, animais2))

//Usando Spread Operator
let animais3: Array<string>;
animais3 = [... animais, ... animais2];