import { Shipper } from "./Shipper";
import { MarkTypes } from "../decorator/MarkShipmentDecorator";
import { ShipmentItem } from "./ShipmentItem";

export interface Shipment extends ShipmentItem {
  shipmentID: number;
  marks: MarkTypes[];
  getInstance(): Shipment;
  getShipmentID(): number;
  ship(shipper: Shipper): void;
}
