import { Shipment } from "../Interface/Shipment";
import { Shipper } from "../Interface/Shipper";

export enum AirEastShipperRates {
  LESS_15 = 0.39,
  MORE_15_LESS_160 = 0.25,
  MORE_160 = 10,
}
export class AirEastShipper implements Shipper {
  zipCode: unknown;
  chargeRate: number = 39;

  getInstance() {
    return this;
  }

  getCost(weight: number): number {
    if (weight <= 15) {
      return weight * this.chargeRate * AirEastShipperRates.LESS_15;
    } else if (weight > 15 && weight < 160) {
      return weight * this.chargeRate * AirEastShipperRates.MORE_15_LESS_160;
    } else return weight * this.chargeRate * AirEastShipperRates.MORE_160;
  }
}
