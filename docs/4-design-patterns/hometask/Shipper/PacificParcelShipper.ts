import { Shipment } from "../Interface/Shipment";
import { Shipper } from "../Interface/Shipper";

export enum PacificParcelShipperRates {
  LESS_15 = 0.51,
  MORE_15_LESS_160 = 0.19,
  MORE_160 = 0.02,
}
export class PacificParcelShipper implements Shipper {
  zipCode: unknown;
  chargeRate: number = 51;

  getInstance() {
    return this;
  }

  getCost(weight: number): number {
    if (weight <= 15) {
      return weight * this.chargeRate * PacificParcelShipperRates.LESS_15;
    } else if (weight > 15 && weight < 160) {
      return (
        weight * this.chargeRate * PacificParcelShipperRates.MORE_15_LESS_160
      );
    } else return weight * this.chargeRate * PacificParcelShipperRates.MORE_160;
  }
}
