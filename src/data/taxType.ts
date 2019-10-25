
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";

const taxTypeName = nameof<TaxType>();

export class TaxType implements DataErrorInfo {
  public static validations =
    new Map([
      [taxTypeName("name"), (a: TaxType) => maxLengthRequired(a.name, 50, "Name")],
    ]);
  public id = 0;
  public name = "";
  public rate = 0;
  public getError = (property) => getError(TaxType.validations, this, property);
}
