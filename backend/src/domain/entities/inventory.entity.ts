import { CustomError } from "../errors/custom.error";

export class InventoryEntity {

    constructor(
        public id: string,
        public store: string,
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

    static fromObject( object: { [key: string]: any }) : InventoryEntity {
        const { 
            id,
            store,
            product,
            brand,
            model,
            quantity,
            dimensions,
            price,
            receivedAt,
            origin,
            available,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!store) throw CustomError.badRequest('Store is required');
        if(!product) throw CustomError.badRequest('Product is required');
        if(!brand) throw CustomError.badRequest('Brand is required');
        if(!model) throw CustomError.badRequest('Model is required');
        if(!quantity) throw CustomError.badRequest('Quantity is required');
        if(!dimensions) throw CustomError.badRequest('Dimensions are required');
        if(!price) throw CustomError.badRequest('Price is required');
        if(!receivedAt) throw CustomError.badRequest('Date is required');
        if(!origin) throw CustomError.badRequest('Origin is required');
        if(!available) throw CustomError.badRequest('Availability is required');

        return new InventoryEntity(id, store, product, brand, model, quantity, dimensions, price, receivedAt, origin, available);

    }
}