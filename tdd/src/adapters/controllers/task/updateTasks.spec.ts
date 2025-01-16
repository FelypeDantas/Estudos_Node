import { UpdateTask } from "../../../usecases/updateTask";
import { HttpRequest, HttpResponse, Validation } from "../../interfaces";
import {
  noContent,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";
import { UpdateTaskController } from "./updateTask";

const makeUpdateTask = (): UpdateTask => {
  class UpdateTaskStub implements UpdateTask {
    async update(taskData: any): Promise<void | Error> {
      return Promise.resolve();
    }
  }
  return new UpdateTaskStub();
};

const makeValidation = (): Validation => {
  class ValidationStub implements Validation {
    validate(input: any): Error | undefined {
      return;
    }
  }
  return new ValidationStub();
};

interface SutTypes {
  sut: UpdateTaskController;
  updateTaskStub: UpdateTask;
  validationStub: Validation;
}

const makeSut = (): SutTypes => {
  const updateTaskStub = makeUpdateTask();
  const validationStub = makeValidation();
  const sut = new UpdateTaskController(updateTaskStub, validationStub);
  return {
    sut,
    updateTaskStub,
    validationStub,
  };
};

const makeFakeRequest = (): HttpRequest => ({
  body: {
    id: "valid_id",
    title: "new_title",
    description: "new_description",
    date: "new_date",
  },
});

describe("UpdateTaskController", () => {
  test("Deve retornar 204 em caso de sucesso", async () => {
    const { sut } = makeSut();

    const httpResponse: HttpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(noContent());
  });

  test("Deve retornar 500 se UpdateTask for lançado", async () => {
    const { sut, updateTaskStub } = makeSut();
    jest.spyOn(updateTaskStub, "update").mockRejectedValueOnce(new Error());

    const httpResponse: HttpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse).toEqual(serverError(new Error()));
  });

  test("Deve retornar 400 se a validação falhar", async () => {
    const { sut, validationStub } = makeSut();
    jest.spyOn(validationStub, "validate").mockReturnValueOnce(new Error());

    const httpResponse: HttpResponse = await sut.handle(makeFakeRequest());
    expect(httpResponse.statusCode).toBe(400);
    expect(httpResponse.body).toEqual(new Error());
  });

  test("Deve chamar UpdateTask com os valores corretos quando apenas uma parte da solicitação for enviada", async () => {
    const { sut, updateTaskStub } = makeSut();
    const updateSpy = jest.spyOn(updateTaskStub, "update");
    const httpRequest: HttpRequest = {
      body: {
        id: "valid_id",
        title: "new_title",
      },
    };
    await sut.handle(httpRequest);
    expect(updateSpy).toHaveBeenCalledWith({
      id: "valid_id",
      title: "new_title",
    });
  });

  test("Deve chamar UpdateTask com os valores corretos quando a solicitação completa for enviada", async () => {
    const { sut, updateTaskStub } = makeSut();
    const updateSpy = jest.spyOn(updateTaskStub, "update");
    const httpRequest: HttpRequest = {
      body: {
        id: "valid_id",
        title: "new_title",
        description: "new_description",
        date: "new_date",
      },
    };
    await sut.handle(httpRequest);
    expect(updateSpy).toHaveBeenCalledWith({
      id: "valid_id",
      title: "new_title",
      description: "new_description",
      date: "new_date",
    });
  });
});
