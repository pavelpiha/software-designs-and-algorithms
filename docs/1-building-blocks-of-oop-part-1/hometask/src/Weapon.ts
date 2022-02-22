import { Item } from "./Item";

export abstract class Weapon extends Item {
  protected MODIFIER_CHANGE_RATE: number = 1;
  protected baseDamage: number;
  protected damageModifier: number;

  protected baseDurability: number;
  protected durabilityModifier: number;

  constructor(
    name: string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight: number
  ) {
    super(name, value, weight);
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  getDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getDurability(): number {
    const durability = this.baseDurability + this.durabilityModifier;
    if (durability > 0) {
      return durability;
    } else {
      return 0;
    }
  }

  use(): string {
    const effectiveDurability = this.getDurability();
    if (effectiveDurability > 0) {
      this.durabilityModifier -= this.MODIFIER_CHANGE_RATE;
      if (this.getDurability() > 0) {
        return `You use the ${
          this.name
        }, dealing ${this.getDamage()} points of damage.`;
      } else if (this.getDurability() <= 0) {
        return `You use the ${
          this.name
        }, dealing ${this.getDamage()} points of damage. The hammer breaks.`;
      }
    } else {
      return `You can't use the ${this.name}, it is broken.`;
    }
  }

  toString(): string {
    return `${this.name} - Value: ${this.value}, Weight: ${
      this.weight
    }, Damage: ${this.getDamage()}, Durability: ${this.getDurability()}% `;
  }
}
