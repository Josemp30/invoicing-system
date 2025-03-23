
export class UpdateTechnicianDto {

    constructor(
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

        const { email, phoneNumber } = props;

        return [undefined, new UpdateTechnicianDto(email, phoneNumber)];
    
    }
}