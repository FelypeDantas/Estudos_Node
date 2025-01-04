"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Colaborador = /** @class */ (function () {
    function Colaborador(nome, cargo) {
        this.nome = nome;
        this._cargo = cargo;
        this._saldo = 0;
    }
    Object.defineProperty(Colaborador.prototype, "cargo", {
        get: function () {
            return this._cargo;
        },
        set: function (cargo) {
            this._cargo = cargo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Colaborador.prototype, "saldo", {
        get: function () {
            return this._saldo;
        },
        set: function (salario) {
            this._saldo += salario;
        },
        enumerable: false,
        configurable: true
    });
    return Colaborador;
}());
exports.default = Colaborador;
