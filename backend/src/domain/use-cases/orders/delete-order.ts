import { OrderEntity } from "../../entities";
import { OrderRepository } from "../../repositories";

export interface DeleteOrderUseCase {
    execute(id: string): Promise<OrderEntity>;
}

export class DeleteOrder implements DeleteOrderUseCase {

    constructor(
        private repository: OrderRepository,
    ){}

    execute(id: string): Promise<OrderEntity> {
        return this.repository.deleteById(id);
    }

}