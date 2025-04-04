
export class CreateOrderDto {

    constructor(
        public clientName: string,
        public clientPhoneNumber: string,
        public product: string,
        public received: boolean
    ){}

    static create(props: {[key: string]: any}): [string?, CreateOrderDto?] {

        const { clientName, clientPhoneNumber, product, received = false } = props;

        if(!clientName) return ['Name of the client is required', undefined];
        if(!clientPhoneNumber) return ['Phone number of the client is required', undefined];
        if(!product) return ['Product is required', undefined];

        return [undefined, new CreateOrderDto(clientName, clientPhoneNumber, product, received)];

    }

}