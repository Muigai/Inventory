
import { DataErrorInfo, getError, maxLengthRequired, nameof } from "../common/validation";

const customerName = nameof<Customer>();

export class Customer implements DataErrorInfo {
      public static validations =
            new Map([
                  [customerName("firstName"), (a: Customer) => maxLengthRequired(a.firstName, 50, "FirstName")],
                  [customerName("lastName"), (a: Customer) => maxLengthRequired(a.lastName, 50, "LastName")],
                  [customerName("emailAddress"),
                   (a: Customer) => maxLengthRequired(a.emailAddress, 50, "EmailAddress")],
                  [customerName("addressLine1"),
                   (a: Customer) => maxLengthRequired(a.addressLine1, 120, "AddressLine1")],
                  [customerName("city"),
                   (a: Customer) => maxLengthRequired(a.city, 30, "City")],
                  [customerName("region"), (a: Customer) => maxLengthRequired(a.region, 50, "Region")],
                  [customerName("countryCodeId"),
                   (a: Customer) => maxLengthRequired(a.countryCodeId, 2, "CountryCodeId")],
                  [customerName("postalCode"), (a: Customer) => maxLengthRequired(a.postalCode, 15, "PostalCode")],
            ]);
      public id = 0;
      public title = "";
      public firstName = "";
      public middleName = "";
      public lastName = "";
      public suffix = "";
      public gender = "";
      public emailAddress = "";
      public addressLine1 = "";
      public addressLine2 = "";
      public city = "";
      public region = "";
      public countryCodeId = "";
      public postalCode = "";
      public phone = "";
      public birthDate?: Date = null;
      public education = "";
      public occupation = "";
      public yearlyIncome?: number = null;
      public maritalStatus = "";
      public totalChildren?: number = null;
      public childrenAtHome?: number = null;
      public isHouseOwner?: boolean = null;
      public numberCarsOwned?: number = null;
      public createdOn = new Date();
      public lastModifiedOn?: Date = null;
      public searchTerms = "";
      public getError = (property) => getError(Customer.validations, this, property);
}
