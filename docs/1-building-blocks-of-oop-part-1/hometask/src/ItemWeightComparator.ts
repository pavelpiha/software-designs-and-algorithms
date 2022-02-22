import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  public compare(first: Item, second: Item): number {
    if (first.weight - second.weight > 0) {
      return 1;
    } else if (first.weight - second.weight < 0) {
      return -1;
    } else return first.compareTo(second);
  }
}
