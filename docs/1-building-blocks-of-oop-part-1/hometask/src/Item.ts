import { Comparable } from "./Comparable";

let id: number | null;

export let counter: number = 0;

export abstract class Item implements Comparable<Item> {
  protected _name: string;
  protected _value: number;
  protected _weight: number;

  public get name(): string {
    return this._name;
  }
  public get value(): number {
    return this._value;
  }
  public get weight(): number {
    return this._weight;
  }

  public set name(value: string) {
    this._name = value;
  }
  public set value(value: number) {
    this._value = value;
  }
  public set weight(value: number) {
    this._weight = value;
  }

  constructor(name: string, value: number, weight: number) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    if (id === null) {
      id = 0;
    } else {
      id++;
    }
    counter++;
  }

  public static numberOfItems(): number {
    return counter;
  }

  public static reset(): void {
    counter = 0;
    id = null;
  }

  public compareTo(other: Item): number {
    if (this.value - other.value > 0) {
      return 1;
    } else if (this.value - other.value < 0) {
      return -1;
    } else return this.name.localeCompare(other.name);
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
  }
}
