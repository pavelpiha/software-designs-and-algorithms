import { Shipment } from "../Interface/Shipment";
import { Shipper } from "../Interface/Shipper";

export enum ChicagoSprintShipperRates {
  LESS_15 = 0.42,
  MORE_15_LESS_160 = 0.2,
  MORE_160 = 0,
}
export class ChicagoSprintShipper implements Shipper {
  zipCode: unknown;
  chargeRate: number = 42;

  getInstance() {
    return this;
  }

  getCost(weight: number): number {
    if (weight <= 15) {
      return weight * this.chargeRate * ChicagoSprintShipperRates.LESS_15;
    } else if (weight > 15 && weight < 160) {
      return (
        weight * this.chargeRate * ChicagoSprintShipperRates.MORE_15_LESS_160
      );
    } else return ChicagoSprintShipperRates.MORE_160;
  }
}
