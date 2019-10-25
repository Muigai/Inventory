import { OrderItem } from "../data/orderItem";
import { Product } from "../data/product";
import { TaxType } from "../data/taxType";

export class OrderItemView extends OrderItem {

    constructor(orderItem: OrderItem,
                private readonly getProduct: (id: string) => Product,
                private readonly getTaxType: (id: number) => TaxType ) {
        super();

        Object.assign(this, orderItem);
    }

    public product = () => this.getProduct(this.productId);

    public taxType = () => this.getTaxType(this.taxTypeId);

    public subtotal = () => this.quantity * this.unitPrice;

    public total = () => (this.subtotal() - this.discount) * (1 + this.taxType().rate / 100);
}
