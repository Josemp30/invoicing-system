
export class CreateProductDto {

    constructor(
        public product: string,
        public brand: string,
        public model: string,
        public dimensions: string,
    ){}

    static create(props: {[key: string]: any}): [string?, CreateProductDto?] {

        const { product, brand, model, dimensions } = props;

        if(!product) return ['Product is required', undefined];
        if(!brand) return ['Brand is required', undefined];
        if(!model) return ['Model is required', undefined];
        if(!dimensions) return ['Dimensions is required', undefined]; 

        return [undefined, new CreateProductDto(product, brand, model, dimensions)];
    }

}