
export class CreateReservationDto {

    constructor(
        public clientName: string,
        public clientAddress: string,
        public clientPhoneNumber: string,
        public product: string,
        public paidAmount: number,
        public pendingAmount: number,
    ){}

    static create(props: {[key: string]: any}): [string?, CreateReservationDto?] {

        const { clientName, clientAddress, clientPhoneNumber, product, paidAmount, pendingAmount } = props;

        if(!clientName) return ['Name of the client is required', undefined];
        if(!clientAddress) return ['Address of the client is required', undefined];
        if(!clientPhoneNumber) return ['Phone number of the client is required', undefined];
        if(!product) return ['Product is required', undefined];
        if(!paidAmount) return ['Paid amount is required', undefined];
        if(!pendingAmount) return ['Pending amount is required', undefined];

        return [undefined, new CreateReservationDto(clientName, clientAddress, clientPhoneNumber, product, paidAmount, pendingAmount)];

    }

}