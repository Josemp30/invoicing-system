import { OrderEntity } from "../../entities";
import { OrderRepository } from "../../repositories";

export interface GetOrdersUseCase {
    execute(): Promise<OrderEntity[]>;
}

export class GetOrders implements GetOrdersUseCase {

    constructor(
        private repository: OrderRepository,
    ){}

    execute(): Promise<OrderEntity[]> {
        return this.repository.getAll();
    }

}