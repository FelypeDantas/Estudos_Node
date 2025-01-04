"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryRepository_1 = require("../repositories/InMemoryRepository");
var ClienteController = /** @class */ (function () {
    function ClienteController() {
        this.repository = new InMemoryRepository_1.default();
    }
    ClienteController.prototype.adicionaCliente = function (cliente) {
        this.repository.adicionaCliente(cliente);
    };
    ClienteController.prototype.listaClientes = function () {
        return this.repository.listaClientes();
    };
    return ClienteController;
}());
exports.default = ClienteController;
