import { CustomError } from "../errors/custom.error";

export class InventoryEntity {

    constructor(
        public id: string,
        public inventoryId: string,
        public productId: string,
        public price: number,
        public stock: number,
    ){}

    static fromObject( object: { [key: string]: any }) : InventoryEntity {
        const {
            id, 
            inventoryId,
            productId,
            price,
            stock,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!inventoryId) throw CustomError.badRequest('Inventory ID is required');
        if(!productId) throw CustomError.badRequest('Product ID is required');
        if(!price) throw CustomError.badRequest('Price is required');
        if(!stock) throw CustomError.badRequest('Stock is required');

        return new InventoryEntity(id, inventoryId, productId, price, stock,);

    }
}