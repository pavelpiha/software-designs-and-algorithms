import { LetterShipment } from "../Shipment/LetterShipment";
import { OversizedShipment } from "../Shipment/OversizedShipment";
import { PackageShipment } from "../Shipment/PackageShipment";
import { Shipment } from "../Interface/Shipment";
import { ShipmentItem } from "../Interface/ShipmentItem";
import { MarkShipmentDecorator } from "../decorator/MarkShipmentDecorator";
import { ShipmentDecorator } from "../decorator/ShipmentDecorator";

export class ShipmentFactory {
  create(shipmentItem: ShipmentItem): Shipment {
    const shipment: Shipment = this.getShipment(shipmentItem);
    if (shipment && shipment.marks.length) {
      return new MarkShipmentDecorator(shipment);
    } else return new ShipmentDecorator(shipment);
  }

  getShipment(shipment: ShipmentItem): Shipment {
    if (shipment.weight <= 15) {
      return new MarkShipmentDecorator(new LetterShipment(shipment));
    } else if (shipment.weight > 15 && shipment.weight < 160) {
      return new PackageShipment(shipment);
    } else if (shipment.weight > 160) {
      return new OversizedShipment(shipment);
    } else {
      console.log("Something goes wrong");
      throw new Error("ShipmentFactory: unknown ShipmentItem");
    }
  }
}
