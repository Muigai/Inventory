
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";

const categoryName = nameof<Category>();

export class Category implements DataErrorInfo {
  public static validations =
    new Map([
      [categoryName("name"), (a: Category) => maxLengthRequired(a.name, 50, "Name")],
    ]);
  public id = 0;
  public name = "";
  public description = "";
  public getError = (property) => getError(Category.validations, this, property);
}
