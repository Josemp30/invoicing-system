import { CashCountEntity } from "../../entities";
import { CashCountRepository } from "../../repositories";

export interface GetCashCountUseCase {
    execute(id: string): Promise<CashCountEntity>;
}

export class GetCashCount implements GetCashCountUseCase {

    constructor(
        private repository: CashCountRepository,
    ){}

    execute(id: string): Promise<CashCountEntity> {
        return this.repository.findById(id);
    }

}