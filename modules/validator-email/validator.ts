interface Validator {
    isValid(s: string): boolean;
}

class EmailValidator implements Validator {
    isValid(s: string): boolean {
        const emailRegex = /\S+@\S+\.\S+/;
        
        return emailRegex.test(s);
    }
}

export {EmailValidator};