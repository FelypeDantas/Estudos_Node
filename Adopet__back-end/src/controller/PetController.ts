import { Request, Response } from "express";
import type tipoPet from "../tipos/tipoPet";
import EnumEspecie from "../Enum/EnumEspecie";
import PetRepository from "../Repositories/PetRepository";
import PetEntity from "../entities/PetEntity";

// let listaDePets: Array<tipoPet> = [];

let id = 0;
function geraId() {
    id = id + 1;
    return id;
}

export default class PetController {

    constructor(private repository: PetRepository) {

    }

    async criaPet(req: Request, res: Response) {
        const { nome, adotado, preco, dataDeNascimento, especie } = <PetEntity>req.body;
        if (!Object.values(EnumEspecie).includes(especie)) {
            return res.status(404).json({ erro: "Espécie inválida" });
        }
        const novoPet = new PetEntity( nome, especie,  dataDeNascimento, preco, adotado);
            await this.repository.criaPet(novoPet);
        return res.status(200).json(novoPet);
    }

    async listaPets(req: Request, res: Response) {
        const listaDePets = await this.repository.listaPet();
        return res.status(200).json(listaDePets);
    }

    async atualizaPet(req: Request, res: Response) {
        const { id } = req.params;
        const { success, message } = await this.repository.atualizaPet(Number(id), req.body as PetEntity);
        if (!success) {
            return res.status(404).json({ message });
        }
        return res.sendStatus(204);
    }

    async deletaPet(req: Request, res: Response) {
        const { id } = req.params;
        const { success, message } = await this.repository.deletaPet(Number(id));

        if (!success) {
            return res.status(404).json({ message });
        }
        return res.sendStatus(204);
    }
}