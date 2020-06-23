"use strict";
const operand = (process.argv[2]);
const n1 = Number(process.argv[3]);
const n2 = Number(process.argv[4]);
function calc(operand, n1, n2) {
    if (operand === "som") {
        return console.log(n1 + n2);
    }
    else if (operand === "sub") {
        return console.log(n1 - n2);
    }
    else if (operand === "div") {
        return console.log(n1 / n2);
    }
    else
        (operand === "mul");
    {
        return console.log(n1 * n2);
    }
    ;
}
console.log(calc(operand, n1, n2));
//# sourceMappingURL=index.js.map