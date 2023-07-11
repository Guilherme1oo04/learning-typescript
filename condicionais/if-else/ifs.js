"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const par = (numero) => {
    if (numero % 2 == 0) {
        return `${numero} é par!`;
    }
    else {
        return `${numero} é ímpar!`;
    }
};
console.log(par(2));
console.log(par(25));
console.log(par(248));
console.log(par(250));
const desconto = (valor) => {
    let porcentagemDesconto = 0;
    if (valor <= 0) {
        return 0;
    }
    else {
        if (valor > 0 && valor <= 500) {
            porcentagemDesconto = 5;
        }
        else if (valor > 500 && valor <= 1000) {
            porcentagemDesconto = 10;
        }
        else {
            porcentagemDesconto = 15;
        }
        return valor - (valor * (porcentagemDesconto / 100));
    }
};
console.log(" ");
console.log(`A compra total teve o valor de R$${500},00. O valor a ser pago com desconto é de R$${desconto(500)},00`);
// Operador ternário
const idadeVotar = (numero) => {
    return ((numero >= 16) ? 'Pode votar!' : 'Não pode votar!');
};
console.log(" ");
console.log(idadeVotar(15));
console.log(idadeVotar(17));
