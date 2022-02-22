import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
  private _numberOfSlices: number;
  private _slicesEaten: number;

  public get numberOfSlices(): number {
    return this._numberOfSlices;
  }
  public get slicesEaten(): number {
    return this._slicesEaten;
  }

  public set slicesEaten(value: number) {
    this._slicesEaten = value;
  }
  public set numberOfSlices(value: number) {
    this._numberOfSlices = value;
  }

  constructor(
    name: string,
    value: number,
    weight: number,
    spoiled: boolean,
    numberOfSlices: number,
    slicesEaten: number
  ) {
    super(name, value, weight, spoiled);
    this.numberOfSlices = numberOfSlices;
    this.slicesEaten = slicesEaten;
  }

  eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.consumed = true;
      }
      return `you eat a slice of the pizza`;
    } else {
      return "";
    }
  }
}
