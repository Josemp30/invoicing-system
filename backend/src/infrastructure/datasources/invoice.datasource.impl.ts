import { prisma } from "../../data/postgres";
import { InvoiceDatasource } from "../../domain/datasources";
import { CreateInvoiceDto } from "../../domain/dtos/invoices";
import { InvoiceEntity } from "../../domain/entities";
import { CustomError } from "../../domain/errors/custom.error";

export class InvoiceDatasourceImpl implements InvoiceDatasource {

    async create(dto: CreateInvoiceDto, shipment: boolean): Promise<InvoiceEntity> {
        const newInvoice = await prisma.invoice.create({
            data: dto,
        });

        if(shipment) {

            const newShipment = await prisma.shipment.create({
                data: {
                    invoiceNumber: newInvoice.invoiceNumber,
                    date: new Date(new Date().setDate(new Date().getDate() + 1)),
                    from: newInvoice.store,
                    clientName: newInvoice.clientName,
                    clientAddress: newInvoice.clientAddress,
                    clientPhoneNumber: newInvoice.clientPhoneNumber,
                    products: newInvoice.products,
                }
            })
        }

        return InvoiceEntity.fromObject(newInvoice);
    }

    async getAll(): Promise<InvoiceEntity[]> {
        const invoices = await prisma.invoice.findMany();

        return invoices.map(invoice => InvoiceEntity.fromObject(invoice));
    }

    async findById(id: string): Promise<InvoiceEntity> {
        const invoice = await prisma.invoice.findFirst({
            where: {id: id}
        });

        if(!invoice) throw CustomError.notFound(`Invoice with id:${id} not found`);
        return InvoiceEntity.fromObject(invoice);
    }

    async deleteById(id: string): Promise<InvoiceEntity> {
        await this.findById(id);

        const deletedInvoice = await prisma.invoice.delete({
            where: {id: id}
        });

        return InvoiceEntity.fromObject(deletedInvoice);
    }

}