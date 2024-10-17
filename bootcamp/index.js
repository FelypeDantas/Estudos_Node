const prompt = require('prompt-sync')();

function classificarHeroi(nome, xp) {
    const niveis = [
        { nome: "Ferro", limite: 1000 },
        { nome: "Bronze", limite: 2000 },
        { nome: "Prata", limite: 5000 },
        { nome: "Ouro", limite: 7000 },
        { nome: "Platina", limite: 8000 },
        { nome: "Ascendente", limite: 9000 },
        { nome: "Imortal", limite: 10000 },
        { nome: "Radiante", limite: Infinity } 
    ];

    let nivel = "Desconhecido";
    for (let i = 0; i < niveis.length; i++) {
        if (xp <= niveis[i].limite) {
            nivel = niveis[i].nome;
            break;
        }
    }

    return { nome: nome, nivel: nivel }; 
}

function entradaDeDados() {
    let herois = []; 
    let continuar = true;

    while (continuar) {
        const nome = prompt(`Digite o nome do Herói: `);
        const xp = parseInt(prompt(`Digite a quantidade de XP: `), 10);
        
        const heroi = classificarHeroi(nome, xp);
        herois.push(heroi);
        
        const resposta = prompt("Deseja adicionar outro herói? (s/n): ").toLowerCase();
        if (resposta === "n") {
            continuar = false;
        }
    }

    console.log("\nHeróis adicionados:");
    herois.forEach(heroi => {
        console.log(`O Herói de nome ${heroi.nome} está no nível ${heroi.nivel}.`);
    });
}

entradaDeDados();
