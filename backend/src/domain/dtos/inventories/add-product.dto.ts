import { InventoryEntity } from "../../entities";

export class AddProductDto {

    constructor(
        public productId: string,
        public price: number,
        public stock: number
    ){}

    static create(props: {[key: string]: any}): [string?, AddProductDto?] {

        const { productId, price, stock} = props;

        if(!productId) return ['Product ID is required', undefined];
        if(!stock) return ['Stock is required', undefined];
        if(!price) return ['Price is required', undefined];


        return [undefined, new AddProductDto(productId, price, stock)];
    }

}