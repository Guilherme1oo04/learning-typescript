// Tipo Any - Ele pode ser qualquer tipo do typescript
// Com o any, o tipo não é verificado

let a: any = 34;
let b: any = ['Guilherme', 'Chaves'];

// Ele permite que operações como essa não sejam interpretadas como erro
let result: any = a + b;
console.log(result);

// Quando o tipo não é definido, o typescript define automaticamente como any
let teste;
teste = 'Opa meu bom!';