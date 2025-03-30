
export class UpdateProductDto {

    constructor(
        public id: string,
        public product: string,
        public brand: string,
        public model: string,
        public dimensions: string,
    ){}

    get values(){

        const returnObject: {[key: string]: any} = {}

        if(this.product) returnObject.product = this.product;
        if(this.brand) returnObject.brand = this.brand;
        if(this.model) returnObject.model = this.model;
        if(this.dimensions) returnObject.dimensions = this.dimensions;

        return returnObject;
    }

    static update(props: {[key: string]: any}): [string?, UpdateProductDto?] {

        const { id, product, brand, model, dimensions } = props;
        //Add id validation

        return [undefined, new UpdateProductDto(id, product, brand, model, dimensions)];

    }

}