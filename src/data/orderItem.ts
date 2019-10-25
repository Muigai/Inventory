
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";

const orderItemName = nameof<OrderItem>();

export class OrderItem implements DataErrorInfo {
  public static validations =
    new Map([
      [orderItemName("productId"), (a: OrderItem) => maxLengthRequired(a.productId, 16, "ProductId")],
    ]);
  public productId = "";
  public quantity = 0;
  public unitPrice = 0;
  public discount = 0;
  public taxTypeId = 0;
  public getError = (property) => getError(OrderItem.validations, this, property);
}
