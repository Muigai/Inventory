import { Category } from "../data/category";
import { Product } from "../data/product";
import { TaxType } from "../data/taxType";

export class ProductView extends Product {

    constructor(product: Product,
                private readonly getCategory: (id: number) => Category,
                private readonly getTaxType: (id: number) => TaxType ) {
        super();

        Object.assign(this, product);
    }

    public category = () => this.getCategory(this.categoryId);

    public taxType = () => this.getTaxType(this.taxTypeId);
}
