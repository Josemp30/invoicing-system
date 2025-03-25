import { CashCountEntity } from "../../entities";
import { CashCountRepository } from "../../repositories";

export interface DeleteCashCountUseCase {
    execute(id: string): Promise<CashCountEntity>;
}

export class DeleteCashCount implements DeleteCashCountUseCase {

    constructor(
        private repository: CashCountRepository,
    ){}

    execute(id: string): Promise<CashCountEntity> {
        return this.repository.deleteById(id);
    }

}