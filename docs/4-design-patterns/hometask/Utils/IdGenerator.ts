import { MockIdGenerator } from "./MockIdGenerator";
import { IdGenerate } from "./IdGenerate";


export class IdGenerator {
  public static generator: IdGenerate;

  private constructor() { }

  public static getInstance(): IdGenerate {
    if (!IdGenerator.generator) {
      //assign proper ID Generator
      IdGenerator.generator = MockIdGenerator.getInstance();
    }
    return MockIdGenerator.generator;
  }

  generateId(): number {
    return IdGenerator.generator.generateId();
  }
}
