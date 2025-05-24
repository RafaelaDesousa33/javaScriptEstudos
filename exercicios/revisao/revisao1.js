"use strict" // modo estrito
// as variaveis precisam ser definidas

let nome = "bruno";


console.log("CFB CURSOS");
console.log(nome);
console.log("nome:" + nome);

// Declaracoes de variaveis

if (true) {
    var nome1 = "Bruno"
}
// quanto mais variaveis criar mais memoria vai consumir
// var da acesso para mexer na variavel, mesmo nao pertecendo ao escopo

console.log(nome1);


if (true) {
    let nome2 = "bruno";
}

console.log(nome2);




function teste() {
    let nome2 = "bruno";

    if (true) {
        console.log(" dentro do if do teste " + nome2);
    }
    console.log("dentro do teste")
}

teste()



console.log("fora do teste" + nome);
// com let é diferente, so pode ser acessada dentro do escopo


// const 
// o valor da constante sempre vai ser o mesmo

const curso = "JavaScript";
//curso = "html" // nao podemos atribuir um novo valor

console.log(curso);

// Operadores aritmeticos 

let num1 = 0, num2 = 0;// importante inicializar variaveis com zero

num1 = 5;
num2 = 10;

soma = num1 % num2;

console.log(soma);

// incremento 

 let num3 = 10;

 num3 ++ // incrementa 1 na variavel
 num3 -- // decrementa 1 na variavel
 num3 += 1 // num3++
 num3 *=2 // esta multiplicando o valor da variavel por 2
 num3 /=2 // esta dividindo o valor da variavel por 2 


console.log(num3);

// Operadores relacionais
 // retorna o resultado verdadeiro ou falso

 /* 
 > 
 >= 
 <
 <=
 ==
 =
 !=
 */

 let number = 10;
 let number2 = 5;
 let number3 = 10;

 console.log(number > number2);
 // number é maior que number 2 ;

 console.log(number < number2);
 // number é menor que number2

 console.log(number >= number3);
 // number é maior ou igual a number3 ;

 console.log(number <= number3);
 // number é menor ou igual a number3 ;

 console.log(number == number3);
 // number é igual number3;

 console.log(!(number == number3));
 // number nao igual a number3 (! = negacao)

 console.log(number != number3);
 // number é difente de number3;

 console.log(!(number != number3));
 // number é diferente number3 

 
































