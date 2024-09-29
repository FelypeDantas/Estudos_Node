import EnumEspecie from "../Enum/EnumEspecie";

type tipoPet = {
    id: number;
    nome: string;
    especie: EnumEspecie;
    preco: number;
    adotado: boolean;
    dataDeNascimento: Date;
}

export default tipoPet;