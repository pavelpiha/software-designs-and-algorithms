export interface Shipper {
  zipCode: number[] | number | unknown;
  chargeRate: number;
  getInstance();
  getCost(weight: number): number;
}
