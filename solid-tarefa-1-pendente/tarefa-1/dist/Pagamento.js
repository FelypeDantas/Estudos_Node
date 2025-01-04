"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagamento = /** @class */ (function () {
    function Pagamento(servicoCalculaSalario) {
        this.servicoCalculaSalario = servicoCalculaSalario;
    }
    Pagamento.prototype.pagar = function (colaborador) {
        var salarioColaborador = this.servicoCalculaSalario.calcular(colaborador.cargo);
        colaborador.saldo = salarioColaborador;
    };
    return Pagamento;
}());
exports.default = Pagamento;
