import { UpdateTaskModel } from "../updateTask";

export interface UpdateTaskRepository {
  update(taskData: UpdateTaskModel): Promise<Error | void>;
}
