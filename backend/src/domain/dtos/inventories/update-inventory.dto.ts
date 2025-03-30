
export class UpdatedInventoryDto {

    constructor(
        public id: string,
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

        const { id, quantity, price, available } = props;
        //Add id validation

        return [undefined, new UpdatedInventoryDto(id, quantity, price, available)];

    }

}