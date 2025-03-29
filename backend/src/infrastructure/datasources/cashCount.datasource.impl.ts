import { prisma } from "../../data/postgres";
import { CashCountDatasource } from "../../domain/datasources";
import { CreateCashCountDto } from "../../domain/dtos/cashcounts";
import { CashCountEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class CashCountDatasourceImpl implements CashCountDatasource {
    
    async create(dto: CreateCashCountDto): Promise<CashCountEntity> {
        const cashCount = await prisma.cashCount.create({
            data: dto,
        });

        return CashCountEntity.fromObject(cashCount);
    }
    
    async getAll(): Promise<CashCountEntity[]> {
        const cashCounts = await prisma.cashCount.findMany();

        return cashCounts.map(cashCount => CashCountEntity.fromObject(cashCount));
    }

    async findById(id: string): Promise<CashCountEntity> {
        const cashCount = await prisma.cashCount.findFirst({
            where: {id: id}
        });

        if(!cashCount) throw CustomError.notFound(`Cash count with id:${id} not found`);
        return CashCountEntity.fromObject(cashCount);
    }

    async deleteById(id: string): Promise<CashCountEntity> {
        await this.findById(id);
        
        const deletedCashCount = await prisma.cashCount.delete({
            where: {id: id}
        });

        return CashCountEntity.fromObject(deletedCashCount);
    }
  
  
}