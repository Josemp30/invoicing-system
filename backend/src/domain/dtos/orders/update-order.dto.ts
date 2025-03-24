
export class UpdateOrderDto {

    constructor(
        public received: boolean,
    ){}
    
    get values(){

        const returnObject: {[key: string]: any} = {}

        if(this.received) returnObject.received = this.received;

        return returnObject;

    }

    static updateOrder(props: {[key: string]: any}): [string?, UpdateOrderDto?] {

        const {received} = props;

        return [undefined, new UpdateOrderDto(received)];

    }


}