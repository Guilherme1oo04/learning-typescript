"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = require("./validator");
const emailTeste1 = "guichaves@gmail.com";
const emailTeste2 = "abcdefg";
const validator = new validator_1.EmailValidator();
console.log(`O e-mail ${emailTeste1} é ${validator.isValid(emailTeste1) ? "válido" : "inválido"}`);
console.log(`O e-mail ${emailTeste2} é ${validator.isValid(emailTeste2) ? "válido" : "inválido"}`);
