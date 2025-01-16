import { Cargos } from "./enum/cargos";
import Colaborador from "./Colaborador";


export default class QuadroColaboradores {
    private _colaboradores: Colaborador[];
    protected salarioBase: number;

    constructor(salarioBase: number = 1000) {
        this._colaboradores = [];
        this.salarioBase = salarioBase;
    }

    contratarColaborador(colaborador: Colaborador) {
        this._colaboradores.push(colaborador);
    }

    demitirColaborador(colaboradorChave: Colaborador) {
        this._colaboradores = this._colaboradores.filter((colaborador) => colaborador !== colaboradorChave);
    }


    get colaboradores() {
        return this._colaboradores;
    }
}



