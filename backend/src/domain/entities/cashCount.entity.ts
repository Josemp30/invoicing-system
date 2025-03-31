import { CustomError } from "../errors/custom.error";
import { InvoiceEntity } from "./invoice.entity";

export class CashCountEntity {

    constructor(
        public id: string,
        public date: string,
        public invoices: InvoiceEntity[],
        public cardTotal: number,
        public cashTotal: number,
        public totalAmount: number,
    ){}

    static fromObject( object: { [key: string]: any }) : CashCountEntity {
        const { 
            id,
            date,
            invoices,
            cardTotal,
            cashTotal,
            totalAmount,
        } = object;

        if(!id) throw CustomError.badRequest('ID is required');
        if(!date) throw CustomError.badRequest('Date is required');
        if(!cardTotal) throw CustomError.badRequest('Card total amount is required');
        if(!cashTotal) throw CustomError.badRequest('Cash total amount is required');
        if(!totalAmount) throw CustomError.badRequest('Total amount is required');

        return new CashCountEntity(id, date, invoices, cardTotal, cashTotal, totalAmount);

    }
}