
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";

const productName = nameof<Product>();

export class Product implements DataErrorInfo {
      public static validations =
            new Map([
                  [productName("id"), (a: Product) => maxLengthRequired(a.id, 16, "Id")],
                  [productName("name"), (a: Product) => maxLengthRequired(a.name, 50, "Name")],
            ]);
      public id = "";
      public categoryId = 0;
      public name = "";
      public description = "";
      public size = "";
      public color = "";
      public listPrice = 0;
      public dealerPrice = 0;
      public taxTypeId = 0;
      public discount = 0;
      public discountStartDate?: Date = null;
      public discountEndDate?: Date = null;
      public stockUnits = 0;
      public safetyStockLevel = 0;
      public createdOn = new Date();
      public lastModifiedOn = new Date();
      public searchTerms = "";
      public getError = (property) => getError(Product.validations, this, property);
}
