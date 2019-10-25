
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";

const countryCodeName = nameof<CountryCode>();

export class CountryCode implements DataErrorInfo {
      public static validations =
            new Map([
                  [countryCodeName("id"), (a: CountryCode) => maxLengthRequired(a.id, 2, "Id")],
                  [countryCodeName("name"), (a: CountryCode) => maxLengthRequired(a.name, 50, "Name")],
            ]);
      public id = "";
      public name = "";
      public getError = (property) => getError(CountryCode.validations, this, property);
}
