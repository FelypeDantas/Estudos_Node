let vetorValores = [1, '1', 30, '30', 10, '10'];

verificaValores(vetorValores, 'loose');
verificaValores(vetorValores, 'strict');

// Função genérica para verificar valores
function verificaValores(vetor, tipoComparacao) {
    for (let i = 0; i < vetor.length; i += 2) {
        const valor1 = vetor[i];
        const valor2 = vetor[i + 1];
        const mensagem = comparaValores(valor1, valor2, tipoComparacao);
        imprimeMensagem(mensagem);
    }
}

// Compara valores com base no tipo de comparação ('loose' ou 'strict')
function comparaValores(valor1, valor2, tipoComparacao) {
    if (tipoComparacao === 'strict') {
        return valor1 === valor2
            ? `Os valores ${valor1} e ${valor2} são iguais e do mesmo tipo.`
            : `Os valores ${valor1} e ${valor2} não têm o mesmo tipo.`;
    } else {
        return valor1 == valor2
            ? `Os valores ${valor1} e ${valor2} são iguais, mas têm tipos diferentes.`
            : `Os valores ${valor1} e ${valor2} não são iguais.`;
    }
}

// Imprime mensagens
function imprimeMensagem(mensagem) {
    console.log(mensagem);
}
