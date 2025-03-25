import { CreateOrderDto, UpdateOrderDto } from "../dtos/orders";
import { OrderEntity } from "../entities";

export abstract class OrderRepository {

    abstract create(dto: CreateOrderDto) : Promise<OrderEntity>;

    abstract getAll() : Promise<OrderEntity[]>;

    abstract findById(id: string) : Promise<OrderEntity>;

    abstract updateById(dto: UpdateOrderDto) : Promise<OrderEntity>;

    abstract deleteById(id: string) : Promise<OrderEntity>;

}