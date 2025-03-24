import { CreateCashCountDto } from "../dtos/cashcounts";
import { CashCountEntity } from "../entities/cashCount.entity";

export abstract class CashCountRepository {

    abstract create(dto: CreateCashCountDto) : Promise<CashCountEntity>;

    abstract getAll() : Promise<CashCountEntity[]>;

    abstract findById(id: string) : Promise<CashCountEntity>;

    abstract updateById() : Promise<CashCountEntity>;

    abstract deleteById(id: string) : Promise<CashCountEntity>;

}