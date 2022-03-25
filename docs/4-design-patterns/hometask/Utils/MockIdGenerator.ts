import { IdGenerator } from "./IdGenerator";


export class MockIdGenerator implements IdGenerator {
  public static generator: MockIdGenerator;
  private id: number = 0;

  private constructor() { }

  public static getInstance(): MockIdGenerator {
    if (!MockIdGenerator.generator) {
      MockIdGenerator.generator = new MockIdGenerator();
    }
    return MockIdGenerator.generator;
  }

  generateId(): number {
    return ++this.id;
  }
}
