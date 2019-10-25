import { notNullOrWhitespace } from "../common/validation";
import { CountryCode } from "../data/countryCode";
import {Customer} from "../data/customer";

export class CustomerView extends Customer {

    constructor(customer: Customer,
                private readonly getCountryCode: (id: string) => CountryCode) {
        super();

        Object.assign(this, customer);
    }

    public countryCode = () => this.getCountryCode(this.countryCodeId);

    public fullName = () => `${this.firstName} ${this.lastName}`;

    public initials = () => `${this.getInitial(this.firstName)}${this.getInitial(this.lastName)}`;

    public fullAddress = () => `${this.addressLine1} ${this.addressLine2}\n${this.city}, ${this.region} ${this.postalCode}\n${this.countryCode().name}`;

    private getInitial = (part: string) => !notNullOrWhitespace(part, "") ? part[0] : "";
}
