"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log();
// Percorrendo listas com for of
// Esse for percorre pegando cada elemento da lista com a key, que nesse caso é num
const arrayNums = [10, 20, 30, 40, 50];
for (const num of arrayNums) {
    console.log(num);
}
console.log();
// Percorrendo listas com for in
// Esse for percorre pegando cada índice na key, que nesse caso é num também
const arrayNums2 = [49, 56, 82, 99, 7];
for (const num in arrayNums2) {
    console.log(arrayNums2[num]);
}
