
export class UpdateIncidenceDto {

    constructor(
        public id: string,
        public product: string,
        public technician: string,
        public solvedAt: Date,
    ){}

    get values() {

        const returnObject: {[key: string]: any} = {}

        if(this.product) returnObject.product =  this.product;
        if(this.technician) returnObject.technician =  this.technician;
        if(this.solvedAt) returnObject.solvedAt =  this.solvedAt;

        return returnObject;

    }

    static update(props: {[key: string]: any}): [string?, UpdateIncidenceDto?] {

        const { id, product, technician, solvedAt } = props
        //Add id validation

        return [undefined, new UpdateIncidenceDto(id, product, technician, solvedAt)];
    }
}