
export class UpdateShipmentDto {

    constructor(
        public date: Date,
        public deliveredAt: Date,
    ){}


    get values() {

        const returnObject: {[key: string]: any} = {}

        if(this.date) returnObject.date = this.date;
        if(this.deliveredAt) returnObject.deliveredAt = this.deliveredAt;

        return returnObject;

    }

    static update(props: {[key: string]: any}): [string?, UpdateShipmentDto?] {

        const { date, deliveredAt } = props;

        return [undefined, new UpdateShipmentDto(date, deliveredAt)];
    
    }
}