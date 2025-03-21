
export class CreateInvoiceDto {

    constructor(
        public date: Date,
        public store: string,
        public clientName: string,
        public clientAddress: string,
        public clientPhoneNumber: string,
        public products: string[],
        public paymentMethod: string,
        public totalAmount: number,
    ){}

    static create(props: {[key: string]: any}) : [string?, CreateInvoiceDto?] {

        const { 
            date = new Date(),
            store,
            clientName,
            clientAddress,
            clientPhoneNumber,
            products,
            paymentMethod,
            totalAmount,
        } = props;

        if(!store) return ['Store is required', undefined];
        if(!clientName) return ['Name of the client is required', undefined];
        if(!clientAddress) return ['Address of the client is required', undefined];
        if(!clientPhoneNumber) return ['Phone number of the client is required', undefined];
        if(!products) return ['Products is required', undefined];
        if(!paymentMethod) return ['Payment method is required', undefined];
        if(!totalAmount) return ['Total amount is required', undefined];

        return [undefined, new CreateInvoiceDto(date, store, clientName, clientAddress, clientPhoneNumber, products, paymentMethod, totalAmount)];

    }

}