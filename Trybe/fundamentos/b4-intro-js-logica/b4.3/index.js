let count = 0;
for(let i = 2; i <= 150; i++){
    (i % 3 == 0) ? count++ : count;
}
console.log((count == 50) ? "50 números e essa mensagem é secreta hem..." : count," números" )

//Verificar a maior palavra dentro de uma array
let arrayPalavras = ["Lucas", "Joao", "Carvalho"];
let indexMaiorPalavra = 0;

for(let i = 0; i < arrayPalavras.length; i++){
    if(arrayPalavras[i].length > arrayPalavras[indexMaiorPalavra].length){
        indexMaiorPalavra = i;
    }
}
console.log(arrayPalavras[indexMaiorPalavra])