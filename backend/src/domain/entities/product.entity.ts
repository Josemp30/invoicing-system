
export class ProductEntity {

    constructor(){}

    static fromObject( object: { [key: string]: any}) : ProductEntity {

        return new ProductEntity;
    }

}