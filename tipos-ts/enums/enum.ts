// Enum numérico - O jeito mais indicado de usar
enum Idioma {
    Portugues,
    Ingles,
    Espanhol,
    Frances
};

console.log(Idioma[0]);
console.log(Idioma.Portugues);

// Enum do tipo String - Não recomendado de usar
enum Dias {
    Segunda = 'SEG',
    Terça = 'TER',
    Quarta = 'QUA'
};

console.log(Dias.Terça);