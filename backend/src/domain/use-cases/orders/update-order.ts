import { UpdateOrderDto } from "../../dtos/orders/update-order.dto";
import { OrderEntity } from "../../entities";
import { OrderRepository } from "../../repositories";

export interface UpdateOrderUseCase {
    execute(dto: UpdateOrderDto): Promise<OrderEntity>;
}

export class UpdateOrder implements UpdateOrderUseCase {

    constructor(
        private repository: OrderRepository,
    ){}

    execute(dto: UpdateOrderDto): Promise<OrderEntity> {
        return this.repository.updateById(dto);
    }

}