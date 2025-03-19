import { InvoiceEntity } from "../entities/invoice.entity";

export abstract class InvoiceRepository {

    abstract create() : Promise<InvoiceEntity>;

    abstract getAll() : Promise<InvoiceEntity[]>;

    abstract findById(id: string) : Promise<InvoiceEntity>;

    abstract updateById() : Promise<InvoiceEntity>;

    abstract deleteById(id: string) : Promise<InvoiceEntity>;

}