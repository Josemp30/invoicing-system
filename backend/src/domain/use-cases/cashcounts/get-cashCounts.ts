import { CashCountEntity } from "../../entities";
import { CashCountRepository } from "../../repositories";

export interface GetCashCountsUseCase {
    execute(): Promise<CashCountEntity[]>;
}

export class GetCashCounts implements GetCashCountsUseCase {

    constructor(
        private repository: CashCountRepository,
    ){}

    execute(): Promise<CashCountEntity[]> {
        return this.repository.getAll();
    }

}