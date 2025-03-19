import { OrderEntity } from "../entities/order.entity";

export abstract class OrderDatasource {

    abstract create() : Promise<OrderEntity>;

    abstract getAll() : Promise<OrderEntity[]>;

    abstract findById(id: string) : Promise<OrderEntity>;

    abstract updateById() : Promise<OrderEntity>;

    abstract deleteById(id: string) : Promise<OrderEntity>;

}