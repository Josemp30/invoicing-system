import { CreateCashCountDto } from "../dtos/cashcounts";
import { CashCountEntity } from "../entities/cashCount.entity";

export abstract class CashCountDatasource {

    abstract create(dto: CreateCashCountDto, date: Date) : Promise<CashCountEntity>;

    abstract getAll() : Promise<CashCountEntity[]>;

    abstract findById(id: string) : Promise<CashCountEntity>;
    
    abstract deleteById(id: string) : Promise<CashCountEntity>;

}