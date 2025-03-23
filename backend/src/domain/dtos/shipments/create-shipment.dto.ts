
export class CreateShipmentDto {

    constructor(
        public invoiceNumber: number,
        public date: Date,
        public from: string,
        public clientName: string,
        public clientAddress: string,
        public clientPhoneNumber: string,
        public product: string[],
        public deliveredAt: Date,
    ){}

    static create(props: {[key: string]: any}): [string?, CreateShipmentDto?] {

        const { invoiceNumber, date, from, clientName, clientAddress, clientPhoneNumber, product, deliveredAt } = props;
        // Add default date( new Date() + 1 day )
        // Add default store

        if(!invoiceNumber) return ['Invoice number is required', undefined];
        if(!clientName) return ['Name of the client is required', undefined];
        if(!clientAddress) return ['Address of the client is required', undefined];
        if(!clientPhoneNumber) return ['Phone number of the client is required', undefined];
        if(!product) return ['Product is required', undefined];

        return [undefined, new CreateShipmentDto(invoiceNumber, date, from, clientName, clientAddress, clientPhoneNumber, product, deliveredAt)];

    }

}