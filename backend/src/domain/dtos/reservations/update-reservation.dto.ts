
export class UpdateReservationDto {

    constructor(
        public id: string,
        public paidAmount: number,
        public pendingAmount: number,
    ){}


    get values() {

        const returnObject: {[key: string]: any} = {}

        if(this.paidAmount) returnObject.paidAmount = this.paidAmount;
        if(this.pendingAmount) returnObject.pendingAmount = this.pendingAmount;

        return returnObject;

    }

    static update(props: {[key: string]: any}): [string?, UpdateReservationDto?] {

        const { id, paidAmount, pendingAmount } = props;
        //Add id validation

        return [undefined, new UpdateReservationDto(id, paidAmount, pendingAmount)];
    
    }
}