import { InvoiceEntity } from "../../entities";
import { InvoiceRepository } from "../../repositories";

export interface DeleteInvoiceUseCase {
    execute(id: string): Promise<InvoiceEntity>;
}

export class DeleteInvoice implements DeleteInvoiceUseCase {

    constructor(
        private repository: InvoiceRepository,
    ){}

    execute(id: string): Promise<InvoiceEntity> {
        return this.repository.deleteById(id);
    }

}