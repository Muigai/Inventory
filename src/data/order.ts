
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";
import { OrderItem } from "./orderItem";

const orderName = nameof<Order>();

export class Order implements DataErrorInfo {
       public static validations =
              new Map<string, (order: Order) => string>([

              ]);
       public id = 0;
       public customerId = 0;
       public orderDate = new Date();
       public shippedDate?: Date = null;
       public deliveredDate?: Date = null;
       public orderStatusId = 0;
       public paymentTypeId?: number = null;
       public trackingNumber = "";
       public shipperId?: number = null;
       public shipAddress = "";
       public shipCity = "";
       public shipRegion = "";
       public shipCountryCodeId = "";
       public shipPostalCode = "";
       public shipPhone = "";
       public lastModifiedOn = new Date();
       public searchTerms = "";
       public orderItems: OrderItem[] = [];
       public getError = (property) => getError(Order.validations, this, property);
}
