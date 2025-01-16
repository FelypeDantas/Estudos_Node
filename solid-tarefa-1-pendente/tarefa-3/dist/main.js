var FuncionarioEfetivo = /** @class */ (function () {
    function FuncionarioEfetivo(nome, cargaHoraria, salario) {
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.salario = salario;
    }
    FuncionarioEfetivo.prototype.trabalha = function () {
        console.log("Me chamo ".concat(this.nome, " e eu trabalho ").concat(this.cargaHoraria, " horas por semana"));
    };
    FuncionarioEfetivo.prototype.calculaSalarioLiquido = function () {
        var TAXA_DESCONTO = 0.2;
        var desconto = this.salario * TAXA_DESCONTO;
        return this.salario - desconto;
    };
    FuncionarioEfetivo.prototype.calculaParticipacaoDeLucros = function (lucro) {
        return lucro * this.salario;
    };
    return FuncionarioEfetivo;
}());
var FuncionarioVoluntario = /** @class */ (function () {
    function FuncionarioVoluntario(nome, cargaHorariaExtensao, funciarioEfetivo) {
        this.orientador = funciarioEfetivo;
        this.nome = nome;
        this.cargaHoraria = cargaHorariaExtensao;
    }
    FuncionarioVoluntario.prototype.escreveRelatorio = function () {
        console.log("Me chamo ".concat(this.nome, " e eu escrevo relat\u00F3rios para o meu orientador ").concat(this.orientador.nome));
    };
    FuncionarioVoluntario.prototype.trabalha = function () {
        console.log("Me chamo ".concat(this.nome, " e eu pesquiso ").concat(this.cargaHoraria, " horas por semana para cumprir na minha gradua\u00E7\u00E3o"));
    };
    return FuncionarioVoluntario;
}());
var funcionarioEfetivo = new FuncionarioEfetivo("João", 40, 2400);
var funcionarioVoluntario = new FuncionarioVoluntario("Enzo", 20, funcionarioEfetivo);
//Efetivo
console.log("nome:", funcionarioEfetivo.nome);
console.log("salário bruto:", funcionarioEfetivo.salario);
console.log("salário líquido:", funcionarioEfetivo.calculaSalarioLiquido());
console.log("salário com PL:", funcionarioEfetivo.calculaParticipacaoDeLucros(2.5), "\n");
//Voluntário
console.log("nome:", funcionarioVoluntario.nome);
funcionarioVoluntario.escreveRelatorio();
