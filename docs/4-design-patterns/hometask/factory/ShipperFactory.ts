import { AirEastShipper } from "../Shipper/AirEastShipper";
import { Shipper } from "../Interface/Shipper";
import { Shipment } from "../Interface/Shipment";
import { ChicagoSprintShipper } from "../Shipper/ChicagoSprintShipper";
import { PacificParcelShipper } from "../Shipper/PacificParcelShipper";

export class ShipperFactory {
  create(shipment: Shipment): Shipper {
    if (shipment.fromZipCode in [1, 2, 3]) {
      return new AirEastShipper();
    } else if (shipment.fromZipCode in [4, 5, 6]) {
      return new ChicagoSprintShipper();
    } else if (shipment.fromZipCode in [7, 8, 9]) {
      return new PacificParcelShipper();
    } else {
      console.log("ShipperFactory: unknown Shipment");
      throw new Error("ShipperFactory: unknown Shipment");
    }
  }
}
