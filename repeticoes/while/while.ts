export {};

let contador: number = 1;

while (contador <= 20){
    if (contador % 5 == 0){
        console.log(`O número ${contador} é o primeiro multíplo de 5 entre 1 e 20.`);
        break;
    } 
    contador++;
}

let contador2: number = 0;

do {
    console.log(contador2);
    contador2++;
} while(contador2 < 5);