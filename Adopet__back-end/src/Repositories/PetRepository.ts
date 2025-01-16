import { Repository } from "typeorm";
import PetEntity from "../entities/PetEntity";
import InterfacePetRepository from "./Interfaces/InterfacePetRepostory";

export default class PetRepository implements InterfacePetRepository {
    private repository: Repository<PetEntity>;

    constructor(repository: Repository<PetEntity>){
        this.repository = repository;
    }

    criaPet(pet: PetEntity): void {
        this.repository.save(pet);
    }
    async listaPet(): Promise<PetEntity[]> {
       return await this.repository.find();
    }

    async atualizaPet(id: number, newData: PetEntity): Promise<{ success: boolean; message?: string }> {
        try {
            const petToUpdate = await this.repository.findOne({ where: { id } });
      
            if (!petToUpdate) {
              return { success: false, message: "Pet não encontrado" };
            }
            Object.assign(petToUpdate, newData);

      await this.repository.save(petToUpdate);

      return { success: true };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Ocorreu um erro ao tentar atualizar o pet.",
      };
    }
    }

    async deletaPet(id: number): Promise<{ success: boolean; message?: string }>{
        try {
            const petToRemove = await this.repository.findOne({ where: { id } });
      
            if (!petToRemove) {
              return { success: false, message: "Pet não encontrado" };
            }
      
            await this.repository.remove(petToRemove);
      
            return { success: true };
          } catch (error) {
            return {
              success: false,
              message: "Ocorreu um erro ao tentar excluir o pet.",
            };
          }
    }
    
}