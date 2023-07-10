"use strict";
const flores = (flor) => {
    let flor1 = flor.toLowerCase();
    if (flor1[flor1.length - 1] != 's') {
        flor1 = flor1 + "s";
    }
    switch (flor1) {
        case 'tulipas':
            console.log("Tulipas são brancas!");
            break;
        case 'rosas':
            console.log("Rosas são vermelhas!");
            break;
        case 'violetas':
            console.log("Violetas são azuis!");
            break;
        default:
            console.log("Essa flor não está no banco de dados!");
            break;
    }
};
flores("tulipas");
flores("tulipa");
