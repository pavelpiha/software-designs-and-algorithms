import { Shipper } from "../Interface/Shipper";
import { MarkTypes } from "./MarkShipmentDecorator";
import { Shipment } from "../Interface/Shipment";

export class ShipmentDecorator implements Shipment {
  protected shipment: Shipment;
  shipmentID: number = 0;
  toAddress: string = "";
  fromAddress: string = "";
  toZipCode: number = 0;
  fromZipCode: number = 0;
  weight: number = 0;
  marks: MarkTypes[] = [];

  constructor(shipment: Shipment) {
    this.shipment = shipment;
    this.shipmentID = shipment.shipmentID;
    this.toAddress = shipment.toAddress;
    this.fromAddress = shipment.fromAddress;
    this.toZipCode = shipment.toZipCode;
    this.fromZipCode = shipment.fromZipCode;
    this.weight = shipment.weight;
  }

  getInstance() {
    return this.shipment.getInstance();
  }
  getShipmentID() {
    return this.shipment.getShipmentID();
  }
  ship(shipper: Shipper): void {
    return this.shipment.ship(shipper);
  }
}
