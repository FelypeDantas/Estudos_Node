import Cliente from "../../entities/Cliente";

interface IClienteRepository {
       adicionaCliente(cliente: Cliente) : void;
        listaClientes(): Cliente[];
}

export default IClienteRepository;