import {
  DeleteTask,
  DeleteTaskModel,
  DeleteTaskRepository,
} from "../../usecases/";

export class DbDeleteTask implements DeleteTask {
  constructor(private readonly deleteTaskRepository: DeleteTaskRepository) {}
  async delete(taskData: DeleteTaskModel): Promise<Error | void> {
    return await this.deleteTaskRepository.delete(taskData);
  }
}
