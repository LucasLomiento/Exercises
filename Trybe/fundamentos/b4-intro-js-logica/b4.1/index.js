let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; // Array criada pela Trybe

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log("Desafio 1:");
for(let number of numbers){
    console.log(number);
}
console.log("fim\n");

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
console.log("Desafio 2:");
let sum = 0;
for(let number of numbers){
    sum += number;
}
console.log(sum);
console.log("fim\n");

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log("Desafio 3:");
let average = 0;
for(let number of numbers){
    average += number;
}
console.log(average / numbers.length);
console.log("fim\n");

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log("Desafio 4:");
average > 20 ? console.log("valor maior que 20") : console.log("valor menor ou igual a 20");
console.log("fim\n");

// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
console.log("Desafio 5:");
let higher = Number.NEGATIVE_INFINITY;
for(let number of numbers){
    number > higher ? higher = number : higher;
}
console.log(higher);
console.log("fim\n");

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log("Desafio 6:");
let oddNumbers = 0;
for(let number of numbers){
    number % 2 != 0 ? oddNumbers++ : oddNumbers;
}
console.log(oddNumbers != 0 ? oddNumbers : "nenhum valor ímpar encontrado");
console.log("fim\n");

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
console.log("Desafio 7:");
let smaller = Number.POSITIVE_INFINITY;
for(let number of numbers){
    number < smaller ? smaller = number : smaller;
}
console.log(smaller);
console.log("fim\n");

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
console.log("Desafio 8:");
let newArray = [];
for(let i = 1; i <= 25; i++){
    newArray.push(i);
}
console.log(newArray);
console.log("fim\n");

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
console.log("Desafio 8:");
for(let number of newArray){
    console.log(number / 2)
}
console.log("fim\n");