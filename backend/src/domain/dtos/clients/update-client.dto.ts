
export class UpdateClientDto {

    constructor(
        public id: string,
        public address: string,
        public phoneNumber: string,
    ){}

    get values() {
        const returnObject: {[key: string]: any} = {}

        if(this.address) returnObject.address = this.address;
        if(this.phoneNumber) returnObject.phoneNumber = this.phoneNumber;

        return returnObject;
    }

    static update(props: {[key: string]: any}): [string?, UpdateClientDto?] {

        const { id, address, phoneNumber } = props;
        //Add id validation

        return [undefined, new UpdateClientDto(id, address, phoneNumber)];

    }

}