import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import EnumEspecie from "../Enum/EnumEspecie";

@Entity()
export default class PetEntity {
    @PrimaryGeneratedColumn()
    id!: number;
    @Column()
    nome: string;
    @Column()
    especie: EnumEspecie;
    @Column()
    dataDeNascimento: Date;
    @Column()
    preco: number;
    @Column()
    adotado: boolean;

    constructor(nome: string, especie: EnumEspecie, dataDeNascimento: Date, preco: number, adotado: boolean ){
        this.nome = nome;
        this.especie = especie;
        this.dataDeNascimento = dataDeNascimento;
        this.preco = preco;
        this.adotado = adotado;
    }
}