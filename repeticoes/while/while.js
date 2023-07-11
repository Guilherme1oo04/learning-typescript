"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let contador = 1;
while (contador <= 20) {
    if (contador % 5 == 0) {
        console.log(`O número ${contador} é o primeiro multíplo de 5 entre 1 e 20.`);
        break;
    }
    contador++;
}
let contador2 = 0;
do {
    console.log(contador2);
    contador2++;
} while (contador2 < 5);
