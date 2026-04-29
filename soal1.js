"use strict";
function printTriangleFromNIM(nim) {
    const lastDigit = parseInt(nim[nim.length - 1]);
    console.log(`NIM: ${nim}`);
    console.log(`Last Digit: ${lastDigit}`);
    for (let i = 1; i <= lastDigit; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += j + ' ';
        }
        console.log(row.trim());
    }
}
printTriangleFromNIM("048886081");
