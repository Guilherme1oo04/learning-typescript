"use strict";
// Tipo Any - Ele pode ser qualquer tipo do typescript
// Com o any, o tipo não é verificado
let a = 34;
let b = ['Guilherme', 'Chaves'];
// Ele permite que operações como essa não sejam interpretadas como erro
let result = a + b;
console.log(result);
// Quando o tipo não é definido, o typescript define automaticamente como any
let teste;
teste = 'Opa meu bom!';
