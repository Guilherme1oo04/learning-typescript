"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Enum numérico - O jeito mais indicado de usar
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugues"] = 0] = "Portugues";
    Idioma[Idioma["Ingles"] = 1] = "Ingles";
    Idioma[Idioma["Espanhol"] = 2] = "Espanhol";
    Idioma[Idioma["Frances"] = 3] = "Frances";
})(Idioma || (Idioma = {}));
;
console.log(Idioma[0]);
console.log(Idioma.Portugues);
// Enum do tipo String - Não recomendado de usar
var Dias;
(function (Dias) {
    Dias["Segunda"] = "SEG";
    Dias["Ter\u00E7a"] = "TER";
    Dias["Quarta"] = "QUA";
})(Dias || (Dias = {}));
;
console.log(Dias.Terça);
