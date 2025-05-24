
"use strict" // modo estrito

let nome = "bruno";


console.log(nome);

// operadores

let num1, num2, res = 0

num1 = 5;
num2 = 10;
num1++;
num2++; // operador de incremento ++ 

num1--;
num2--; // operador de decremento -- 

num2--;
num1--;

num1 = 10;
//num1 += 1; // num1 ++

num1 *= 2; // 10*2






console.log(num1);
console.log(num2);




// Operadores relacionais 

let num3 = 10;
let num4 = 5;
let num5 = 10;

console.log(num3 < num4);
console.log(num3 >= num5);

console.log(num3 == num5);
console.log(num3 == num4);

// ! (not/negacao)

console.log(!(num3 == num4));
console.log(!(num3 != num4));

// != (diferente)

console.log(num3 != num4);

// entrada de dados 

let usuario = prompt("Digite o seu nome")

// operadores logicos 

let n1, n2, n3, n4;

n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

console.log((n1 > n2) && (n1 > n3)); // todas as codincoes tem que resultar em verdadeira

console.log((n1 > n2) || (n1 > n3)); // uma ou outra tem que ser verdadeira


console.log((!(n1 > n2) || (n1 > n3))); // NOT / negacao