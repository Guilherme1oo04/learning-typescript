// O tipo unknown serve basicamente pra voltar ao js normal, sem definição de tipo
// O tipo vai ser definido de acordo com os valores que a variável receber

let testando: unknown;

testando = 12;
console.log(`${testando} = ${typeof(testando)}`);

testando = 'Guilherme';
console.log(`${testando} = ${typeof(testando)}`);

testando = true;
console.log(`${testando} = ${typeof(testando)}`);

// Esse tipo não pode ser recebido por variáveis de outro tipo

let valor: unknown;

//let status: boolean = valor; => Isso gerará um erro