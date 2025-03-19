import { CashCountEntity } from "../entities/cashCount.entity";

export abstract class CashCountDatasource {

    abstract create() : Promise<CashCountEntity>;

    abstract getAll() : Promise<CashCountEntity[]>;

    abstract findById(id: string) : Promise<CashCountEntity>;

    abstract updateById() : Promise<CashCountEntity>;

    abstract deleteById(id: string) : Promise<CashCountEntity>;

}