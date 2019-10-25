
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";

const shipperName = nameof<Shipper>();

export class Shipper implements DataErrorInfo {
  public static validations =
    new Map([
      [shipperName("name"), (a: Shipper) => maxLengthRequired(a.name, 50, "Name")],
    ]);
  public id = 0;
  public name = "";
  public phone = "";
  public getError = (property) => getError(Shipper.validations, this, property);
}
