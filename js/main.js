var num1 = prompt("Primer numero");
console.log(num1);
var num2 = prompt("Segundo numero");
console.log(num2);
var operador = prompt("Operador");
console.log(operador);
switch(operador){

case "Divide":
    result = num1 + " Dividido por "+ num2 + " igual " + num1 * num2 + ".";
break;

case "Suma":
    result = num1 + " suma "+ num2 + " igual " + num1 * num2 + ".";
break;
}
