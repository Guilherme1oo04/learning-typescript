export {};

// Interseção 
interface Pessoa {
    nome: string,
    cidade: string,
    profissao: string,
}
interface Endereco {
    nome: string,
    cidade: string,
    bairro: string,
    rua: string,
    numeroCasa: number,
}

// Está sendo criado um tipo que é a interseção das duas interfaces
type DadosPessoa = Endereco & Pessoa;

const pessoa1: DadosPessoa = {
    nome: "Guilherme",
    profissao: "Programador",
    bairro: "Bairro das Graças",
    rua: "Rua das Graças",
    numeroCasa: 455,
    cidade: "Cidade das Graças",
}


// Type Guards

// Typeof é usado para verificar o tipo de algum valor
const verificaNum = (valor: string | number) => {
    if (typeof valor == 'number'){
        return `${valor} é um número.`;
    } else {
        if (!isNaN(Number(valor))){
            return `${valor} é um número.`;
        } else {
            return `${valor} não é um número.`;
        }
    }
}
console.log(verificaNum("9"));

// Instaceof é usado para verificar se algum valor pertence à uma classe, como por exemplo a classe Date
const formataData = (valor: Date | string) => {
    if (valor instanceof Date){
        return valor.toUTCString;
    }

    return new Date(valor).toUTCString;
}