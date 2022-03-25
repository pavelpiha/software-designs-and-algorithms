import { ShipmentFactory } from "./factory/ShipmentFactory";
import { ShipmentItem } from "./Interface/ShipmentItem";
import { ShipperFactory } from "./factory/ShipperFactory";

export class Client {
  ship(shipment: ShipmentItem) {
    const shipmentFactory = new ShipmentFactory();
    const shipmentInstance = shipmentFactory.create(shipment);
    const shipperFactory = new ShipperFactory();
    const shipperInstance = shipperFactory.create(shipmentInstance);
    shipmentInstance.ship(shipperInstance);
  }
}


