
export class UpdateOrderDto {

    constructor(
        public id: string,
        public received: boolean,
    ){}
    
    get values(){

        const returnObject: {[key: string]: any} = {}

        if(this.received) returnObject.received = this.received;

        return returnObject;

    }

    static updateOrder(props: {[key: string]: any}): [string?, UpdateOrderDto?] {

        const {id, received} = props;
        //Add id validation

        return [undefined, new UpdateOrderDto(id, received)];

    }


}