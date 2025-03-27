import { InventoryEntity } from "../../entities";

export class AddProductDto {

    constructor(
        public product: string,
        public brand: string,
        public model: string,
        public quantity: number,
        public dimensions: string,
        public price: number,
        public receivedAt: Date,
        public origin: string,
        public available: boolean,
    ){}

    static create(props: {[key: string]: any}): [string?, AddProductDto?] {

        const { product, brand, model, quantity, dimensions, price, receivedAt = new Date(), origin, available = true } = props;

        if(!product) return ['Product is required', undefined];
        if(!brand) return ['Brand is required', undefined];
        if(!model) return ['Model is required', undefined];
        if(!quantity) return ['Quantity is required', undefined];
        if(!dimensions) return ['Dimensions is required', undefined];
        if(!price) return ['Price is required', undefined];
        if(!origin) return ['Origin is required', undefined];

        return [undefined, new AddProductDto(product, brand, model, quantity, dimensions, price, receivedAt, origin, available )];
    }

}