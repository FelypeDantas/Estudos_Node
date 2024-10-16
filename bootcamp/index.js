function classificarHeroi(nome, xp) {
    const niveis = [
        { nome: "Ferro", limite: 1000 },
        { nome: "Bronze", limite: 2000 },
        { nome: "Prata", limite: 5000 },
        { nome: "Ouro", limite: 7000 },
        { nome: "Platina", limite: 8000 },
        { nome: "Ascendente", limite: 9000 },
        { nome: "Imortal", limite: 10000 },
        { nome: "Radiante", limite: Infinity } // Para XP maior que 10000
    ];

    let nivel = "Desconhecido";
    for (let i = 0; i < niveis.length; i++) {
        if (xp <= niveis[i].limite) {
            nivel = niveis[i].nome;
            break;
        }
    }

    document.getElementById("resultado").innerText = `O Herói de nome ${nome} está no nível de ${nivel}.`;
}

document.getElementById("classificar").addEventListener("click", () => {
    const nome = document.getElementById("nome").value;
    const xp = parseInt(document.getElementById("xp").value, 10);
    if (nome && !isNaN(xp)) {
        classificarHeroi(nome, xp);
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
});

document.getElementById("resetar").addEventListener("click", () => {
    document.getElementById("nome").value = '';
    document.getElementById("xp").value = '';
    document.getElementById("resultado").innerText = '';
});