import { CreateOrderDto } from "../../dtos/orders";
import { OrderEntity } from "../../entities";
import { OrderRepository } from "../../repositories";

export interface CreateOrderUseCase {
    execute(dto: CreateOrderDto): Promise<OrderEntity>;
}

export class CreateOrder implements CreateOrderUseCase {

    constructor(
        private repository: OrderRepository,
    ){}

    execute(dto: CreateOrderDto): Promise<OrderEntity> {
        return this.repository.create(dto);
    }


}