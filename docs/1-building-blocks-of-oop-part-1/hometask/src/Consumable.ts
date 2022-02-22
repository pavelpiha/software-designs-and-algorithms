import { Item } from "./Item";

export abstract class Consumable extends Item {
  private _consumed: boolean = false;
  private _spoiled: boolean = false;

  public get consumed(): boolean {
    return this._consumed;
  }

  public get spoiled(): boolean {
    return this._spoiled;
  }

  public set consumed(value: boolean) {
    this._consumed = value;
  }
  public set spoiled(value: boolean) {
    this._spoiled = value;
  }

  constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);
    this.name = name;
    this.value = value;
    this.weight = weight;
    this.spoiled = spoiled;
  }

  use(): string {
    if (!this.consumed && !this.spoiled) {
      return this.eat();
    }
  }

  eat(): string {
    if (this.consumed) {
      return `There is nothing left of the ${this.name} to consume.`;
    } else if (this.spoiled) {
      return `You eat the ${this.name}.\n
    You feel sick.`;
    } else {
      return "You eat the bread.";
    }
  }
}
