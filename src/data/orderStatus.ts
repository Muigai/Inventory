
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";

const orderStatusName = nameof<OrderStatus>();

export class OrderStatus implements DataErrorInfo {
  public static validations =
    new Map([
      [orderStatusName("name"), (a: OrderStatus) => maxLengthRequired(a.name, 50, "Name")],
    ]);
  public id = 0;
  public name = "";
  public getError = (property) => getError(OrderStatus.validations, this, property);
}
