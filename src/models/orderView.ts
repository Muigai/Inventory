import { CountryCode } from "../data/countryCode";
import { Customer } from "../data/customer";
import { Order } from "../data/order";
import { OrderItem } from "../data/orderItem";
import { OrderStatus } from "../data/orderStatus";
import { PaymentType } from "../data/paymentType";
import { Product } from "../data/product";
import { Shipper } from "../data/shipper";
import { TaxType } from "../data/taxType";
import { OrderItemView } from "./orderItemView";

export class OrderView extends Order {

    // private items: OrderItemView[] = [];

    public orderItemsViews: OrderItemView[] = [];

    constructor(order: Order,
                getProduct: (id: string) => Product,
                getTaxType: (id: number) => TaxType,
                private readonly getCustomer: (id: number) => Customer,
                private readonly getOrderStatus: (id: number) => OrderStatus,
                private readonly getPaymentType: (id: number) => PaymentType,
                private readonly getShipper: (id: number) => Shipper,
                private readonly getCountryCode: (id: string) => CountryCode) {
        super();

        Object.assign(this, order);

        for (const item of this.orderItems) {
            this.orderItemsViews.push(new OrderItemView(item, getProduct, getTaxType));
        }
    }

    public customer = () => this.getCustomer(this.customerId);

    public orderStatus = () => this.getOrderStatus(this.orderStatusId);

    public paymentType = () => this.getPaymentType(this.paymentTypeId);

    public shipper = () => this.getShipper(this.shipperId);

    public shipCountryCode = () => this.getCountryCode(this.shipCountryCodeId);

    public canEditPayment = () => this.orderStatusId > 0;

    public canEditShipping = () => this.orderStatusId > 1;

    public canEditDelivery = () => this.orderStatusId > 2;

    public updateStatusDependencies = () => {
            switch (this.orderStatusId) {
                case 0:
                case 1:
                    this.shippedDate = null;
                    this.deliveredDate = null;
                    break;
                case 2:
                    this.shippedDate = this.shippedDate ?? this.orderDate;
                    this.deliveredDate = null;
                    break;
                case 3:
                    this.shippedDate = this.shippedDate ?? this.orderDate;
                    this.deliveredDate = this.deliveredDate ?? this.shippedDate ?? this.orderDate;
                    break;
            }
        }
}
