import { Weapon } from "./Weapon";

export class Bow extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("bow", baseDamage, baseDurability, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.value = value;
    this.weight = weight;
  }

  polish(): void {
    if (this.getDurability() < 1) {
      this.durabilityModifier += this.MODIFIER_CHANGE_RATE;
    }
  }
}
