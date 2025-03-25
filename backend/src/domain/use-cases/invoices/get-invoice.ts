import { InvoiceEntity } from "../../entities";
import { InvoiceRepository } from "../../repositories";

export interface GetInvoiceUseCase {
    execute(id: string): Promise<InvoiceEntity>;
}

export class GetInvoice implements GetInvoiceUseCase {

    constructor(
        private repository: InvoiceRepository,
    ){}

    execute(id: string): Promise<InvoiceEntity> {
        return this.repository.findById(id);
    }

}