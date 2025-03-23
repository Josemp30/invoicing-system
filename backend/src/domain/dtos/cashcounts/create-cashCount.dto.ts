import { InvoiceEntity } from "../../entities/invoice.entity";


export class CreateCashCountDto {

    constructor(
        public date: Date,
        public invoices: InvoiceEntity[],
        public totalAmount: number,
    ){}

    static create(props: {[kery: string]: any}): [string?, CreateCashCountDto?] {

        const { date = new Date(), invoices, totalAmount } = props;

        if(!totalAmount) return ['Total amount is required', undefined];

        return [undefined, new CreateCashCountDto(date, invoices, totalAmount)];

    }

}