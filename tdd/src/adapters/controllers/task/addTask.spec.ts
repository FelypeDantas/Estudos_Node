import { Task } from "../../../entities/task";
import { AddTask, AddTaskModel } from "../../../usecases";
import { HttpRequest, Validation } from "../../interfaces";
import { serverError } from "../../presentations/api/httpResponses/httpResponses";
import { AddTaskController } from "./addTask";

const makeAddTask = (): AddTask => {
  class AddTaskStub implements AddTask {
    async add(task: AddTaskModel): Promise<Task> {
      return Promise.resolve({
        id: "any_id",
        title: "any_title",
        description: "any_description",
        date: "30/06/2024",
      });
    }
  }
  return new AddTaskStub();
};

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate(data: any): void | Error {
      return;
    }
  }
  return new ValidationStub();
};

interface SutTypes {
  addTaskStub: AddTask;
  validationStub: Validation;
  sut: AddTaskController;
}
const makeSut = (): SutTypes => {
  const addTaskStub = makeAddTask();
  const validationStub = makeValidation();
  const sut = new AddTaskController(addTaskStub, validationStub);

  return {
    addTaskStub,
    validationStub,
    sut,
  };
};

const makeFakeRequest = (): HttpRequest => {
  return {
    body: {
      title: "any_title",
      description: "any_description",
      date: "30/06/2024",
    },
  };
};
describe("AddTask Controller", () => {
  test("Deve chamar AddTask com valores corretos", async () => {
    const { sut, addTaskStub } = makeSut();

    const addSpy = jest.spyOn(addTaskStub, "add");

    await sut.handle(makeFakeRequest());

    expect(addSpy).toHaveBeenCalledWith({
      title: "any_title",
      description: "any_description",
      date: "30/06/2024",
    });
  });

  test("Deve retornar 500 se AddTask lançar uma exceção", async () => {
    const { sut, addTaskStub } = makeSut();
    jest
      .spyOn(addTaskStub, "add")
      .mockImplementationOnce(async () => Promise.reject(new Error()));
    const httpResponse = await sut.handle(makeFakeRequest());

    expect(httpResponse).toEqual(serverError(new Error()));
  });
  test("Deve chamar Validation com valores corretos", async () => {
    const { sut, validationStub } = makeSut();

    const validateSpy = jest.spyOn(validationStub, "validate");
    const httpRequest = makeFakeRequest();
    await sut.handle(httpRequest);

    expect(validateSpy).toHaveBeenCalledWith(httpRequest.body);
  });
});
