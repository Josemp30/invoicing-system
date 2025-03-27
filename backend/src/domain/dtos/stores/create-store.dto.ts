
export class CreateStoreDto {

    constructor(
        public name: string,
        public address: string,
        public phoneNumber: string,
    ){}

    static create(props: {[key: string]: any}): [string?, CreateStoreDto?] {

        const { name, address, phoneNumber } = props;

        if(!name) return ['Name of the store is required', undefined];
        if(!address) return ['Address of the store is required', undefined];
        if(!phoneNumber) return ['Phone number of the store is required', undefined]; 

        return [undefined, new CreateStoreDto(name, address, phoneNumber)];
    }

}