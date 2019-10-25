
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";

const paymentTypeName = nameof<PaymentType>();

export class PaymentType implements DataErrorInfo {
  public static validations =
    new Map([
      [paymentTypeName("name"), (a: PaymentType) => maxLengthRequired(a.name, 50, "Name")],
    ]);
  public id = 0;
  public name = "";
  public getError = (property) => getError(PaymentType.validations, this, property);
}
