"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var QuadroColaboradores = /** @class */ (function () {
    function QuadroColaboradores(salarioBase) {
        if (salarioBase === void 0) { salarioBase = 1000; }
        this._colaboradores = [];
        this.salarioBase = salarioBase;
    }
    QuadroColaboradores.prototype.contratarColaborador = function (colaborador) {
        this._colaboradores.push(colaborador);
    };
    QuadroColaboradores.prototype.demitirColaborador = function (colaboradorChave) {
        this._colaboradores = this._colaboradores.filter(function (colaborador) { return colaborador !== colaboradorChave; });
    };
    Object.defineProperty(QuadroColaboradores.prototype, "colaboradores", {
        get: function () {
            return this._colaboradores;
        },
        enumerable: false,
        configurable: true
    });
    return QuadroColaboradores;
}());
exports.default = QuadroColaboradores;
