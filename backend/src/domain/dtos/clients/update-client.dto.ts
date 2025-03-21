
export class UpdateClientDto {

    constructor(
        public address: string,
        public phoneNumber: string,
    ){}

    get Values() {
        const returnObject: {[key: string]: any} = {}

        if(this.address) returnObject.address = this.address;
        if(this.phoneNumber) returnObject.phoneNumber = this.phoneNumber;

        return returnObject;
    }

    static update(props: {[key: string]: any}): [string?, UpdateClientDto?] {

        const { address, phoneNumber } = props;

        return [undefined, new UpdateClientDto(address, phoneNumber)];

    }

}