import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super("sword", baseDamage, baseDurability, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.value = value;
    this.weight = weight;
  }

  polish(): void {
    if (this.damageModifier <= Math.round(this.baseDamage / 4)) {
      this.damageModifier += this.MODIFIER_CHANGE_RATE;
    }
  }
}
