import { CustomError } from "../errors/custom.error";

export class ProductEntity {

    constructor(
        public id: string,
        public product: string,
        public brand: string,
        public model: string,
        public dimensions: string,
    ){}

    static fromObject( object: { [key: string]: any}) : ProductEntity {

        const { id, product, brand, model, dimensions } = object;

        if(!product) throw CustomError.badRequest('Product is required');
        if(!brand) throw CustomError.badRequest('Brand is required');
        if(!model) throw CustomError.badRequest('Model is required');
        if(!dimensions) throw CustomError.badRequest('Dimensions are required');

        return new ProductEntity(id, product, brand, model, dimensions);
    }

}