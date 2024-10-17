let notas = [4, 6, 8];

let media = (notas[0] + notas[1] + notas[2]) / 3;

if(media < 5){
    console.log("Reprovado");
} else if(media >= 5 && media <= 7){
    console.log("Recuperacao");
} else if(media > 7 && media <= 10){
    console.log("Passou de semestre");
} else {
    console.error("Essa nota nao e valida");
}