
export class UpdateShipmentDto {

    constructor(
        public id: string,
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

        const { id, date, deliveredAt } = props;
        //Add id validation

        return [undefined, new UpdateShipmentDto(id, date, deliveredAt)];
    
    }
}