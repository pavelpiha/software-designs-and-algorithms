import { Shipper } from "../Interface/Shipper";
import { ShipmentDecorator } from "./ShipmentDecorator";

export enum MarkTypes {
  FRAGILE = "FRAGILE",
  DO_NOT_LEAVE_IF_ADDRESS_NOT_AT_HOME = "DO NOT LEAVE IF ADDRESS NOT AT HOME",
  RETURN_RECEIPT_REQUESTED = "RETURN RECEIPT REQUESTED",
}

export class MarkShipmentDecorator extends ShipmentDecorator {
  ship(shipper: Shipper): void {
    this.shipment.ship(shipper);
    this.markShip(this.shipment.marks);
  }

  markShip(marks: MarkTypes[]): void {
    marks.forEach((mark) => console.log(`**${mark}**`));
  }
}
