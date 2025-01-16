import { ListCollectionsCursor } from "mongodb";
import { Task } from "../../entities/task";
import { ListTasksRepository } from "../../usecases/repository/listTasksRepository";
import { DbListTasks } from "./dbListTasks";
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
const makeListTasksRepository = (): ListTasksRepository => {
  class LisTasksRepositoryStub implements ListTasksRepository {
    async list(): Promise<Task[]> {
      return Promise.resolve(makeFakeTasks());
    }
  }
  return new LisTasksRepositoryStub();
};

interface SutTypes {
  sut: DbListTasks;
  listTasksRepositoryStub: ListTasksRepository;
}

const makeSut = (): SutTypes => {
  const listTasksRepositoryStub = makeListTasksRepository();
  const sut = new DbListTasks(listTasksRepositoryStub);
  return {
    sut,
    listTasksRepositoryStub,
  };
};
describe("DbListTasks", () => {
  test("Deve chamar ListTasksRepository", async () => {
    const { sut, listTasksRepositoryStub } = makeSut();
    const listSpy = jest.spyOn(listTasksRepositoryStub, "list");
    await sut.list();
    expect(listSpy).toHaveBeenCalled();
  });

  test("Deve retornar tarefas em caso de sucesso", async () => {
    const { sut } = makeSut();
    const tasks = await sut.list();
    expect(tasks).toEqual(makeFakeTasks());
  });

  test("Deve lançar um erro se ListTasksRepository lançar um erro", async () => {
    const { sut, listTasksRepositoryStub } = makeSut();
    jest
      .spyOn(listTasksRepositoryStub, "list")
      .mockReturnValueOnce(Promise.reject(new Error()));
    const promise = sut.list();
    await expect(promise).rejects.toThrow();
  });
});
