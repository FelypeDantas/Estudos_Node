let precoMedioCombustivel;
let distanciaKm = 1600;
let consumoVeiculo = 10;
let tipoDeCombustivel = "Etanol";

if(tipoDeCombustivel === "Etanol"){
    precoMedioCombustivel = 6.00;
} else if(tipoDeCombustivel === "Gasolina"){
    precoMedioCombustivel = 4.00;
} else {
    precoMedioCombustivel = 2.00;
}

gastoCombustivel = distanciaKm / consumoVeiculo;

let valorDeViagem = precoMedioCombustivel * gastoCombustivel;

console.log("A viagem custou: R$" + valorDeViagem.toFixed(2));