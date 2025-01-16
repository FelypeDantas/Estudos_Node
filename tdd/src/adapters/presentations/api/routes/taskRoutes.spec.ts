import { MongoManager } from "../../../../dataSources";
import request from "supertest";
import app from "../config/app";

describe("TaskRoutes", () => {
  const client = MongoManager.getInstance();
  beforeAll(async () => {
    await client.connect(process.env.MONGO_URL as string);
  });

  afterAll(async () => {
    await client.disconnect();
  });

  test("Deve listar 204 se a lista estiver vazia", async () => {
    await request(app).get("/api/tasks").expect(204);
  });

  test("Deve retornar 204 ao chamar a rota para atualizar a tarefa", async () => {
    const task = await client.getCollection("tasks").insertOne({
      title: "old_title",
      description: "old_description",
      date: "old_date",
    });

    const taskId = task.insertedId.toHexString();

    await request(app)
      .put("/api/tasks")
      .send({
        id: taskId,
        title: "new_title",
        description: "new_description",
        date: "new_date",
      })
      .expect(204);
  });
});
