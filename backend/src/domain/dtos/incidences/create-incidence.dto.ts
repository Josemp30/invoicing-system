
export class CreateIncidenceDto {

    constructor(
        public invoiceNumber: number,
        public product: string,
        public technician: string,
        public createdAt: Date,
        public solvedAt: Date,
    ){}

    static create(props: {[key: string]:any}): [string?, CreateIncidenceDto?] {

        const { invoiceNumber, product, technician, createdAt = new Date(), solvedAt } = props;

        if(!invoiceNumber) return ['Invoice number is required', undefined];
        if(!product) return ['Product is required', undefined];
        if(!technician) return ['Technician is required', undefined];

        return [undefined, new CreateIncidenceDto(invoiceNumber, product, technician, createdAt, solvedAt)];

    }
}