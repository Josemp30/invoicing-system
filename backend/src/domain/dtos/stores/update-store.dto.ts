
export class UpdateStoreDto {

    constructor(
        public name: string,
        public address: string,
        public phoneNumber: string,
    ){}

    get values(){

        const returnObject: {[key: string]: any} = {}

        if(this.name) returnObject.name = this.name;
        if(this.address) returnObject.address = this.address;
        if(this.phoneNumber) returnObject.phoneNumber = this.phoneNumber;

        return returnObject;
    }

    static update(props: {[key: string]: any}): [string?, UpdateStoreDto?] {

        const { name, address, phoneNumber } = props;

        return [undefined, new UpdateStoreDto(name, address, phoneNumber)];

    }

}