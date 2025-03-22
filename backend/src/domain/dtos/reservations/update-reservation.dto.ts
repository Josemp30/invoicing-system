
export class UpdateReservationDto {

    constructor(
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

        const { paidAmount, pendingAmount } = props;

        return [undefined, new UpdateReservationDto(paidAmount, pendingAmount)];
    
    }
}