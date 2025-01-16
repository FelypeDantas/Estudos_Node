import { ObjectId } from "mongodb";
import {
  InvalidParamError,
  NotFoundError,
} from "../../../adapters/presentations/api/errors";
import { UpdateTaskModel } from "../../../usecases/updateTask";
import { MongoManager } from "../../config/mongoManager";
import { TaskMongoRepository } from "./taskMongoRepository";

const makeSut = (): TaskMongoRepository => {
  return new TaskMongoRepository();
};
describe("TaskMongoRepository", () => {
  const client = MongoManager.getInstance();
  beforeAll(async () => {
    await client.connect(process.env.MONGO_URL as string);
  });

  afterAll(async () => {
    await client.disconnect();
  });

  beforeEach(async () => {
    await client.getCollection("tasks").deleteMany({});
  });
  test("Deve retornar a tarefa em caso de sucesso", async () => {
    const sut = makeSut();
    await sut.add({
      title: "any_title",
      description: "any_description",
      date: "any_date",
    });

    const tasks = await sut.list();

    expect(tasks[0].id).toBeTruthy();
    expect(tasks[0].title).toBe("any_title");
    expect(tasks[0].description).toBe("any_description");
    expect(tasks[0].date).toBe("any_date");
    expect(tasks.length).toBe(1);
  });

  test("Deve atualizar tarefa com sucesso", async () => {
    const sut = makeSut();
    const task = await sut.add({
      title: "old_title",
      description: "old_description",
      date: "old_date",
    });

    const updateData: UpdateTaskModel = {
      id: task.id,
      title: "new_title",
      description: "new_description",
      date: "new_date",
    };

    await sut.update(updateData);

    const updatedTask = await client
      .getCollection("tasks")
      .findOne({ _id: new ObjectId(task.id) });

    expect(updatedTask).toBeTruthy();
    expect(updatedTask?.title).toBe("new_title");
    expect(updatedTask?.description).toBe("new_description");
    expect(updatedTask?.date).toBe("new_date");
  });

  test("Deve retornar InvalidParamError se o ID da tarefa for inválido", async () => {
    const sut = makeSut();
    const updateData: UpdateTaskModel = {
      id: "invalid_id",
      title: "new_title",
      description: "new_description",
      date: "new_date",
    };

    const error = await sut.update(updateData);

    expect(error).toEqual(new InvalidParamError("invalid_id"));
  });

  test("Deve retornar NotFoundError se nenhuma tarefa for encontrada para atualização", async () => {
    const sut = makeSut();
    const updateData: UpdateTaskModel = {
      id: new ObjectId().toHexString(),
      title: "new_title",
      description: "new_description",
      date: "new_date",
    };

    const error = await sut.update(updateData);

    expect(error).toEqual(new NotFoundError("task"));
  });
});
