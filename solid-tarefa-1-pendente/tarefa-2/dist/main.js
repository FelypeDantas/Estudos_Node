{
    var MES_COMERCIAL_1 = 20; //dias trabalhados no mês
    var ContratoClt = /** @class */ (function () {
        function ContratoClt() {
            this.GANHO_POR_HORA_CLT = 24;
            this.CARGA_HORARIA_DIARIA_CLT = 8;
            this.titulo = 'CLT';
        }
        ContratoClt.prototype.remuneracao = function () {
            return this.GANHO_POR_HORA_CLT * this.CARGA_HORARIA_DIARIA_CLT;
        };
        return ContratoClt;
    }());
    var Estagio = /** @class */ (function () {
        function Estagio() {
            this.GANHO_POR_HORA_ESTAGIARIO = 14;
            this.CARGA_HORARIA_DIARIA_ESTAGIARIO = 4;
            this.titulo = 'Estagiário';
        }
        Estagio.prototype.remuneracao = function () {
            return this.GANHO_POR_HORA_ESTAGIARIO * this.CARGA_HORARIA_DIARIA_ESTAGIARIO;
        };
        return Estagio;
    }());
    var ContratoPJ = /** @class */ (function () {
        function ContratoPJ() {
            this.GANHO_POR_HORA_PJ = 36;
            this.CARGA_HORARIA_DIARIA_PJ = 8;
            this.titulo = 'PJ';
        }
        ContratoPJ.prototype.remuneracao = function () {
            return this.GANHO_POR_HORA_PJ * this.CARGA_HORARIA_DIARIA_PJ;
        };
        return ContratoPJ;
    }());
    var FolhaDePagamento = /** @class */ (function () {
        function FolhaDePagamento() {
        }
        FolhaDePagamento.calcularSalarioMensal = function (funcionario) {
            return funcionario.remuneracao() * MES_COMERCIAL_1;
        };
        return FolhaDePagamento;
    }());
    var funcionarioClt = new ContratoClt();
    var funcionarioEstagiario = new Estagio();
    var funcionarioPJ = new ContratoPJ();
    console.log("Sou ".concat(funcionarioClt.titulo, " e meu sal\u00E1rio l\u00EDquido mensal \u00E9 R$ ").concat(FolhaDePagamento.calcularSalarioMensal(funcionarioClt)));
    console.log("Sou ".concat(funcionarioEstagiario.titulo, " e meu sal\u00E1rio l\u00EDquido mensal \u00E9 R$ ").concat(FolhaDePagamento.calcularSalarioMensal(funcionarioEstagiario)));
    console.log("Sou ".concat(funcionarioPJ.titulo, " e meu sal\u00E1rio l\u00EDquido mensal \u00E9 R$ ").concat(FolhaDePagamento.calcularSalarioMensal(funcionarioPJ)));
}
