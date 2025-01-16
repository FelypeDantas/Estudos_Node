import { Task } from "../../../entities/task";
import { ListTasks } from "../../../usecases/listTasks";
import {
  noContent,
  ok,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";
import { ListTasksController } from "./listTasks";

interface SutTypes {
  sut: ListTasksController;
  listTaskStub: ListTasks;
}

const makeListTasks = (): ListTasks => {
  class ListTasksStub implements ListTasks {
    async list(): Promise<Task[]> {
      return Promise.resolve(makeFakeTasks());
    }
  }
  return new ListTasksStub();
};

const makeSut = (): SutTypes => {
  const listTaskStub = makeListTasks();
  const sut = new ListTasksController(listTaskStub);
  return { sut, listTaskStub };
};

const makeFakeTasks = (): Task[] => {
  return [
    {
      id: "any_id",
      title: "any_title",
      description: "any_description",
      date: "any_date",
    },
    {
      id: "other_id",
      title: "other_title",
      description: "other_description",
      date: "other_date",
    },
  ];
};

describe("ListTasks Controller", () => {
  test("Deve retornar 204 se a lista estiver vazia", async () => {
    const { sut, listTaskStub } = makeSut();
    jest.spyOn(listTaskStub, "list").mockReturnValueOnce(Promise.resolve([]));
    const httpResponse = await sut.handle({});
    expect(httpResponse).toEqual(noContent());
  });

  test("Deve retornar 200 com uma lista de tarefas", async () => {
    const { sut } = makeSut();
    const httpResponse = await sut.handle({});
    expect(httpResponse).toEqual(ok(makeFakeTasks()));
  });

  test("Deve verificar se a funcionalidade que lista tarefas é chamada corretamente", async () => {
    const { sut, listTaskStub } = makeSut();
    const listSpy = jest.spyOn(listTaskStub, "list");
    await sut.handle({});

    expect(listSpy).toHaveBeenCalled();
  });

  test("Deve retornar 500 se acontecer algum erro", async () => {
    const { listTaskStub, sut } = makeSut();
    jest
      .spyOn(listTaskStub, "list")
      .mockReturnValueOnce(Promise.reject(new Error()));
    const httpResponse = await sut.handle({});
    expect(httpResponse).toEqual(serverError(new Error()));
  });
});
