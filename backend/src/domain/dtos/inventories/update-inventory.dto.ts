
export class UpdatedInventoryDto {

    constructor(
        public quantity: number,
        public price: number,
        public available: boolean,
    ){}

    get values(){

        const returnObject: {[key: string]: any} = {}

        if(this.quantity) returnObject.quantity = this.quantity;
        if(this.price) returnObject.price = this.price;
        if(this.available) returnObject.available = this.available;

        return returnObject;
    }

    static update(props: {[key: string]: any}): [string?, UpdatedInventoryDto?] {

        const { quantity, price, available } = props;

        return [undefined, new UpdatedInventoryDto(quantity, price, available)];

    }

}