import { MarkTypes } from "../decorator/MarkShipmentDecorator";

export interface ShipmentItem {
  toAddress: string;
  fromAddress: string;
  //here is used number type instead of string
  toZipCode: number;
  //here is used number type instead of string
  fromZipCode: number;
  weight: number;
  marks?: MarkTypes[];
}
