import { OrderEntity } from "../../entities";
import { OrderRepository } from "../../repositories";

export interface GetOrderUseCase {
    execute(id: string): Promise<OrderEntity>;
}

export class GetOrder implements GetOrderUseCase {

    constructor(
        private repository: OrderRepository,
    ){}

    execute(id: string): Promise<OrderEntity> {
        return this.repository.findById(id);
    }

}