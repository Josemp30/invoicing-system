
export class CreateProductDto {

    constructor(
        public name: string,
        public brand: string,
        public model: string,
        public origin: string,
    ){}

    static create(props: {[key: string]: any}): [string?, CreateProductDto?] {

        const { name, brand, model, origin } = props;

        if(!name) return ['Name is required', undefined];
        if(!brand) return ['Brand is required', undefined];
        if(!model) return ['Model is required', undefined];
        if(!origin) return ['Origin is required', undefined]; 

        return [undefined, new CreateProductDto(name, brand, model, origin)];
    }

}