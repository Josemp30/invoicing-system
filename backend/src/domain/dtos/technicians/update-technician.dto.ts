
export class UpdateTechnicianDto {

    constructor(
        public id: string,
        public email: string,
        public phoneNumber: string,
    ){}


    get values() {

        const returnObject: {[key: string]: any} = {}

        if(this.email) returnObject.email = this.email;
        if(this.phoneNumber) returnObject.phoneNumber = this.phoneNumber;

        return returnObject;

    }

    static update(props: {[key: string]: any}): [string?, UpdateTechnicianDto?] {

        const { id, email, phoneNumber } = props;
        //Add id validation

        return [undefined, new UpdateTechnicianDto(id, email, phoneNumber)];
    
    }
}