import { Shipper } from "../Interface/Shipper";
import { IdGenerator } from "../Utils/IdGenerator";
import { MarkTypes } from "../decorator/MarkShipmentDecorator";
import { Shipment } from "../Interface/Shipment";
import { ShipmentItem } from "../Interface/ShipmentItem";

export class OversizedShipment implements Shipment {
  shipmentID: number = 0;
  toAddress: string = "";
  fromAddress: string = "";
  toZipCode: number = 0;
  fromZipCode: number = 0;
  weight: number = 0;
  marks: MarkTypes[] = [];

  constructor(shipment: ShipmentItem) {
    this.toAddress = shipment.toAddress;
    this.fromAddress = shipment.fromAddress;
    this.toZipCode = shipment.toZipCode;
    this.fromZipCode = shipment.fromZipCode;
    this.weight = shipment.weight;
    this.marks = shipment.marks ? shipment.marks : [];
  }

  getInstance(): Shipment {
    return this;
  }
  getShipmentID(): number {
    this.shipmentID = IdGenerator.getInstance().generateId();
    return this.shipmentID;
  }
  ship(shipper: Shipper): void {
    console.log(
      `Shipment with the ID ${this.getShipmentID()} will be picked up from ${
        this.fromAddress
      }
      ${this.fromZipCode} and shipped to ${this.toAddress} ${
        this.toZipCode
      } Cost = ${shipper.getCost(this.weight)}`
    );
  }
}
