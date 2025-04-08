import { CreateInvoiceDto } from "../../dtos/invoices";
import { InvoiceEntity } from "../../entities";
import { InvoiceRepository } from "../../repositories";

export interface CreateInvoiceUseCase {
    execute(dto: CreateInvoiceDto, shipment: boolean): Promise<InvoiceEntity>;
}

export class CreateInvoice implements CreateInvoiceUseCase {

    constructor(
        private repository: InvoiceRepository,
    ){}

    execute(dto: CreateInvoiceDto, shipment: boolean): Promise<InvoiceEntity> {
        return this.repository.create(dto, shipment);
    }

}