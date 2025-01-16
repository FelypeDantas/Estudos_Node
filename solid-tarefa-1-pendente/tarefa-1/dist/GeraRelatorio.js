"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var default_1 = /** @class */ (function () {
    function default_1(_colaboradores, servicoCalculaSalario) {
        this._colaboradores = _colaboradores;
        this.servicoCalculaSalario = servicoCalculaSalario;
        this._colaboradores = [];
    }
    default_1.prototype.gerarJSON = function () {
        var _this = this;
        var relatorio = this._colaboradores.map(function (colaborador) {
            return ({
                nome: colaborador.nome,
                cargo: colaborador.cargo,
                salario: _this.servicoCalculaSalario.calcular(colaborador.cargo),
            });
        });
        return JSON.stringify(relatorio);
    };
    ;
    return default_1;
}());
exports.default = default_1;
