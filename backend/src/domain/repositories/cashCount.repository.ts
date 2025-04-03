import { CreateCashCountDto } from "../dtos/cashcounts";
import { CashCountEntity } from "../entities";

export abstract class CashCountRepository {

    abstract create(dto: CreateCashCountDto, date: Date) : Promise<CashCountEntity>;

    abstract getAll() : Promise<CashCountEntity[]>;

    abstract findById(id: string) : Promise<CashCountEntity>;

    abstract deleteById(id: string) : Promise<CashCountEntity>;

}