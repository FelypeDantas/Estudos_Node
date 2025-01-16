import {
  DbAddTask,
  LogErrorMongoRepository,
  TaskMongoRepository,
} from "../../dataSources";
import { AddTaskController } from "../controllers/task/addTask";
import { LogErrorControllerDecorator } from "../decorators/logErrorControllerDecorator";
import { addTaskValidationCompositeFactory } from "./addTaskValidationCompositeFactory";

export const addTaskControllerFactory = () => {
  const taskMongoRepository = new TaskMongoRepository();
  const dbAddTask = new DbAddTask(taskMongoRepository);
  const taskController = new AddTaskController(
    dbAddTask,
    addTaskValidationCompositeFactory()
  );
  const logErrorMongoRepository = new LogErrorMongoRepository();
  return new LogErrorControllerDecorator(
    taskController,
    logErrorMongoRepository
  );
};
