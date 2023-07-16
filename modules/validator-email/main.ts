import { EmailValidator } from "./validator";

const emailTeste1: string = "guichaves@gmail.com";
const emailTeste2: string = "abcdefg";
const validator = new EmailValidator();

console.log(`O e-mail ${emailTeste1} é ${validator.isValid(emailTeste1) ? "válido" : "inválido"}`);
console.log(`O e-mail ${emailTeste2} é ${validator.isValid(emailTeste2) ? "válido" : "inválido"}`);