let count = 0;
for(let i = 2; i <= 150; i++){
    (i % 3 == 0) ? count++ : count;
}
console.log((count == 50) ? "50 números e essa mensagem é secreta hem..." : count," números" )