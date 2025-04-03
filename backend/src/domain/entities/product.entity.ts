import { CustomError } from "../errors/custom.error";

export class ProductEntity {

    constructor(
        public id: string,
        public name: string,
        public brand: string,
        public model: string,
        public origin: string,
    ){}

    static fromObject( object: { [key: string]: any}) : ProductEntity {

        const { id, name, brand, model, origin } = object;

        if(!name) throw CustomError.badRequest('Name is required');
        if(!brand) throw CustomError.badRequest('Brand is required');
        if(!model) throw CustomError.badRequest('Model is required');
        if(!origin) throw CustomError.badRequest('Origin is required');

        return new ProductEntity(id, name, brand, model, origin);
    }

}