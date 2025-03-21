
export class CreateClientDto {

    constructor(
        public name: string,
        public address: string,
        public phoneNumber: string,
        public registeredAt: Date,
    ){}

    static Create(props: {[key: string]: any}): [string?, CreateClientDto?] {

        const { name, address, phoneNumber, registeredAt = new Date()} = props;

        if(!name) return ['Name is required', undefined];
        if(!address) return ['Address is required', undefined];
        if(!phoneNumber) return ['Phone number is required', undefined];

        return [undefined, new CreateClientDto(name, address, phoneNumber, registeredAt)];

    }

}