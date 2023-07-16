"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidator = void 0;
class EmailValidator {
    isValid(s) {
        const emailRegex = /\S+@\S+\.\S+/;
        return emailRegex.test(s);
    }
}
exports.EmailValidator = EmailValidator;
