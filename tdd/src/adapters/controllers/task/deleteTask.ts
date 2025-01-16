import { DeleteTask } from "../../../usecases/deleteTask";
import {
  Controller,
  Validation,
  HttpRequest,
  HttpResponse,
} from "../../interfaces";

import {
  badRequest,
  noContent,
  serverError,
} from "../../presentations/api/httpResponses/httpResponses";

export class DeleteTaskController implements Controller {
  constructor(
    private readonly deleteTask: DeleteTask,
    private readonly validation: Validation
  ) {}
  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.body;

      const isValid = this.validation.validate({ id });
      if (isValid) {
        return badRequest(isValid);
      }

      const error = await this.deleteTask.delete({ id });
      if (error) {
        return badRequest(error);
      }

      return noContent();
    } catch (error: any) {
      return serverError(error);
    }
  }
}
