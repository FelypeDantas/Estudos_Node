import { Collection, MongoClient } from "mongodb";

export class MongoManager {
  public static instance: MongoManager;
  private client: MongoClient | null = null;
  private constructor() {}

  public static getInstance(): MongoManager {
    if (!MongoManager.instance) {
      MongoManager.instance = new MongoManager();
    }
    return MongoManager.instance;
  }
  public async connect(url: string): Promise<void> {
    if (!this.client) {
      this.client = await MongoClient.connect(url);
    }
  }
  public async disconnect(): Promise<void> {
    if (this.client) {
      await this.client.close();
    }
    this.client = null;
  }
  public getCollection(name: string): Collection {
    if (!this.client) throw new Error("MongoClient is not connected");
    return this.client?.db().collection(name);
  }
}
