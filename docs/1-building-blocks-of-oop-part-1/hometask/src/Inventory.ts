import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";
import { ItemWeightComparator } from "./ItemWeightComparator";
export class Inventory {
  items: Item[] = [];
  sort(): Item[];
  sort(comparator: ItemComparator): Item[];
  sort(comparator?: ItemComparator): Item[] {
    if (comparator) {
      return this.items.sort(new ItemWeightComparator().compare);
    } else {
      return this.items.sort();
    }
  }

  toString(): string {
    return this.items.join(", ");
  }
}
