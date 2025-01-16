import { Task } from "../../entities/task";
import { AddTaskModel } from "../addTask";

export interface AddTaskRepository {
  add(taskData: AddTaskModel): Promise<Task>;
}
