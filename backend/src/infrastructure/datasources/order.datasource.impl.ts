import { prisma } from "../../data/postgres";
import { OrderDatasource } from "../../domain/datasources";
import { CreateOrderDto, UpdateOrderDto } from "../../domain/dtos/orders";
import { OrderEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class OrderDatasourceImpl implements OrderDatasource {

    async create(dto: CreateOrderDto): Promise<OrderEntity> {
        const newOrder = await prisma.order.create({
            data: dto
        });

        return OrderEntity.fromObject(newOrder);
    }

    async getAll(): Promise<OrderEntity[]> {
        const orders = await prisma.order.findMany();

        return orders.map(order => OrderEntity.fromObject(order));
    }

    async findById(id: string): Promise<OrderEntity> {
        const order = await prisma.order.findFirst({
            where: {id: id}
        });

        if(!order) throw CustomError.notFound(`Order with id:${id} not found`);
        return OrderEntity.fromObject(order);
    }

    async updateById(dto: UpdateOrderDto): Promise<OrderEntity> {
        await this.findById(dto.id);

        const updatedOrder = await prisma.order.update({
            where: {id: dto.id},
            data: dto.values,
        });

        return OrderEntity.fromObject(updatedOrder);
    }

    async deleteById(id: string): Promise<OrderEntity> {
        await this.findById(id);

        const deletedOrder = await prisma.order.delete({
            where: {id: id}
        });

        return OrderEntity.fromObject(deletedOrder);
    }

}