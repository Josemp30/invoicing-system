import { prisma } from "../../data/postgres";
import { CashCountDatasource } from "../../domain/datasources";
import { CreateCashCountDto } from "../../domain/dtos/cashcounts";
import { CashCountEntity, InvoiceEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class CashCountDatasourceImpl implements CashCountDatasource {
    
    async create(dto: CreateCashCountDto, date: Date): Promise<CashCountEntity> {

        const dayInvoices = await prisma.invoice.findMany({
            where: {
                date: {
                    gte: new Date(date.setHours(0 ,0, 0, 0)),
                    lte: new Date(date.setHours(23, 59, 59, 999))
                },
                cashCountId: null
            }
        });

        if(!dayInvoices) throw CustomError.notFound('There are no invoices on this day');

        function cardFilter(obj: {[key: string]: any}) {
            
            if(obj.paymentMethod === 'tarjeta') {
                return true;
            } else {
                return false;
            }
        }

        function cashFilter(obj: {[key: string]: any}){

            if(obj.paymentMethod === 'efectivo'){
                return true;
            } else {
                return false;
            }

        }

        const totalCardPayments = dayInvoices.filter(cardFilter).reduce((sum, invoice) => sum + invoice.totalAmount.toNumber(), 0);
        const totalCashPayments = dayInvoices.filter(cashFilter).reduce((sum, invoice) => sum + invoice.totalAmount.toNumber(), 0);
        const total = totalCardPayments + totalCashPayments;

        const newCashCount = await prisma.cashCount.create({
            data:{
                date: date,
                cardTotal: totalCardPayments,
                cashTotal: totalCashPayments,
                totalAmount: total,
                invoices: {
                    connect: dayInvoices.map(invoice => ({ invoiceNumber: invoice.invoiceNumber}))
                }
            }
        });

        return CashCountEntity.fromObject(newCashCount);

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