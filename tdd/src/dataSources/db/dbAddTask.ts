import { Task } from "../../entities/task";
import { AddTaskModel, AddTask, AddTaskRepository } from "../../usecases";

export class DbAddTask implements AddTask {
  constructor(private readonly addTaskRepository: AddTaskRepository) {}

  async add(taskData: AddTaskModel): Promise<Task> {
    const task = await this.addTaskRepository.add(taskData);
    return task;
  }
}
