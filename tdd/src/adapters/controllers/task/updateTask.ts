import { UpdateTask } from "../../../usecases/updateTask";
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

export class UpdateTaskController implements Controller {
  constructor(
    private readonly updateTask: UpdateTask,
    private readonly validation: Validation
  ) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { id, title, description, date } = httpRequest.body;

      const isInvalid = this.validation.validate({
        id,
        title,
        description,
        date,
      });
      if (isInvalid) {
        return badRequest(isInvalid);
      }

      const error = await this.updateTask.update({
        id,
        title,
        description,
        date,
      });
      if (error) {
        return badRequest(error);
      }

      return noContent();
    } catch (error: any) {
      return serverError(error);
    }
  }
}
