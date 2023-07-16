export function somar(... numeros: number[]){
    let soma = 0;

    for (const num of numeros) {
        soma = soma + num;
    }

    return soma;
}

export function multiplicar(... numeros: number[]){
    let multiplicacao = 1;

    for (const num of numeros) {
        multiplicacao = multiplicacao * num;
    }

    return multiplicacao;
}