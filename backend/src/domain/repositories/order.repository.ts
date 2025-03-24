import { CreateOrderDto } from "../dtos/orders";
import { OrderEntity } from "../entities/order.entity";

export abstract class OrderRepository {

    abstract create(dto: CreateOrderDto) : Promise<OrderEntity>;

    abstract getAll() : Promise<OrderEntity[]>;

    abstract findById(id: string) : Promise<OrderEntity>;

    abstract updateById() : Promise<OrderEntity>;

    abstract deleteById(id: string) : Promise<OrderEntity>;

}