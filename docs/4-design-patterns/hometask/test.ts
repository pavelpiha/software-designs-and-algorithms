import { Client } from "./Client";
import { MarkTypes } from "./decorator/MarkShipmentDecorator";
import { ShipmentItem } from "./Interface/ShipmentItem";

const client = new Client();
const shipmentItem: ShipmentItem = {
  weight: 12,
  toAddress: "Mockingbird Lane, Tulsa",
  fromAddress: "4th Ave SE",
  toZipCode: 3,
  fromZipCode: 2,
};

const shipmentItem2: ShipmentItem = {
  weight: 100,
  toAddress: "Mockingbird Lane, Tulsa",
  fromAddress: "4th Ave SE",
  toZipCode: 3,
  fromZipCode: 2,
  marks: [MarkTypes.FRAGILE],
};
client.ship(shipmentItem);
client.ship(shipmentItem2);
