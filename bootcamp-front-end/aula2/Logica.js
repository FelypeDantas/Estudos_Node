const salarioBruto = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

const valorImposto = calcularImposto(salarioBruto);
const saida = salarioBruto - valorImposto + valorBeneficios;
print(saida.toFixed(2));

function calcularImposto(salario) {
    let aliquota;
    if(salario >= 0 && salario <= 1100){
        aliquota = 0.05 * salario;
    } else if(salario >= 1100.01 && salario <= 2500){
        aliquota = 0.1 * salario;
    } else if(salario >= 2500.01){
        aliquota = 0.15 * salario;
    } else {
        print("O salario nao pode ser negativo!");
    }

    return aliquota * salario;
}