"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var InMemoryRepository = /** @class */ (function () {
    function InMemoryRepository() {
        this.db = [];
    }
    InMemoryRepository.prototype.adicionaCliente = function (cliente) {
        this.db.push(cliente);
    };
    InMemoryRepository.prototype.listaClientes = function () {
        return this.db;
    };
    return InMemoryRepository;
}());
exports.default = InMemoryRepository;
