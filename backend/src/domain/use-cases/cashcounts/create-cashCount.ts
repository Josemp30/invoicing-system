import { CreateCashCountDto } from "../../dtos/cashcounts";
import { CashCountEntity } from "../../entities";
import { CashCountRepository } from "../../repositories";

export interface CreateCashCountUseCase {
    execute(dto: CreateCashCountDto, date: Date): Promise<CashCountEntity>;
}

export class CreateCashCount implements CreateCashCountUseCase {

    constructor(
        private repository: CashCountRepository,
    ){}

    execute(dto: CreateCashCountDto, date: Date): Promise<CashCountEntity> {
        return this.repository.create(dto, date);
    }

}