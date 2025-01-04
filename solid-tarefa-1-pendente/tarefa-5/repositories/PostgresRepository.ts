import Cliente from "../entities/Cliente";
import IClienteRepository from "./interfaces/IClienteRepository";

export default class PostgresRepository implements IClienteRepository {
    private db: Record<number, Cliente>;

    constructor() {
        this.db = {}
    }
    adicionaCliente(cliente: Cliente): void {
        this.add(cliente);
    }
    listaClientes(): Cliente[] {
        return this.list();
    }

    add(cliente: Cliente) {
        this.db[cliente.id] = cliente
    }

    list() {
        const clientes: Cliente[] = [];

        for (const chave in this.db) {
            if (Object.prototype.hasOwnProperty.call(this.db, chave)) {
                clientes.push(this.db[chave]);
            }
        }

        return clientes;
    }
}