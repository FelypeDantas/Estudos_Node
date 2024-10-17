let precoMedioCombustivel = 4.00;
let distanciaKm = 1600;
let consumoVeiculo = 10;

gastoCombustivel = distanciaKm / consumoVeiculo;

let valorDeViagem = precoMedioCombustivel * gastoCombustivel;

console.log("A viagem custou: R$" + valorDeViagem.toFixed(2));