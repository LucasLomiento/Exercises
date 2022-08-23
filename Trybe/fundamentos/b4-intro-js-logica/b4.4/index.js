//parte 1
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

console.log("\n1 - ")
console.log("Bem-vinda,",info.personagem);

console.log("\n2 - ")
info["recorrente"] = "Sim";

console.log(info);

console.log("\n3 - ")
for (let valor in info) {
    console.log(valor)
}

console.log("\n4 - ")
for (let valor in info) {
    console.log(info[valor])
}

console.log("\n5 - ")
let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
};

for(let valor in info){

    if(info[valor].toLowerCase() == "sim" && info2[valor].toLowerCase() == "sim"){
        console.log("Ambos recorrentes")
    } else if(info[valor] == "não" && info2[valor] == "não"){
        console.log("Ambos não recorrentes")
    }else{
        console.log(info[valor],"e",info2[valor])
    }
}


console.log("\n6 - ")
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
};

console.log(`O livro favorito de ${leitor.nome} ${leitor.sobrenome} se chama '${leitor.livrosFavoritos[0].titulo}'.`)
