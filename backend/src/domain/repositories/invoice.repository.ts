import { CreateInvoiceDto } from "../dtos/invoices";
import { InvoiceEntity } from "../entities";

export abstract class InvoiceRepository {

    abstract create(dto: CreateInvoiceDto, shipment: boolean) : Promise<InvoiceEntity>;

    abstract getAll() : Promise<InvoiceEntity[]>;

    abstract findById(id: string) : Promise<InvoiceEntity>;

    abstract deleteById(id: string) : Promise<InvoiceEntity>;

}