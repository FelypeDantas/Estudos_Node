import { UpdateTaskRepository } from "../../usecases/repository/updateTaskRepository";
import { UpdateTask, UpdateTaskModel } from "../../usecases/updateTask";

export class DbUpdateTask implements UpdateTask {
  constructor(private readonly updateTaskRepository: UpdateTaskRepository) {}
  async update(taskData: UpdateTaskModel): Promise<Error | void> {
    return await this.updateTaskRepository.update(taskData);
  }
}
