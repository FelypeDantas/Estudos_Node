import { Task } from "../../entities/task";

export interface ListTasksRepository {
  list(): Promise<Task[]>;
}
