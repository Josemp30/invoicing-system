import { InvoiceEntity } from "../../entities";
import { InvoiceRepository } from "../../repositories";

export interface GetInvoicesUseCase {
    execute(): Promise<InvoiceEntity[]>;
}

export class GetInvoices implements GetInvoicesUseCase {

    constructor(
        private repository: InvoiceRepository,
    ){}

    execute(): Promise<InvoiceEntity[]> {
        return this.repository.getAll();
    }

}