// Função nomeada
function somarNumeros(a: number, b: number) {
    return a + b;
}

// Constante recebendo função
const subtraiNumeros = function(a: number, b: number) {
    return a - b;
}

// Arrow Function
const multiplicaNumeros = (a: number, b: number) => {
    return a * b;
}

// Function constructor
const mostraMensagem = new Function('mensagem', 'return `Fala ${mensagem}`');

console.log(mostraMensagem("Meu bom!"));

// Parâmetros opcionais 
// Uso do "?" antes para definir como opcional
const preencheEmail = (nome: string, email?: string) => {
    if (email != undefined){
        console.log(`O e-mail de ${nome} é: ${email}`);
    } else {
        console.log(`${nome} não preencheu o e-mail!`);
    }
}

preencheEmail("Guilherme");