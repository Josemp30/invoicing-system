
export class CreateTechnicianDto {

    constructor(
        public name: string,
        public email: string,
        public phoneNumber: string,
    ){}

    static create(props: {[key: string]: any}): [string?, CreateTechnicianDto?] {

        const { name, email, phoneNumber } = props;

        if(!name) return ['Name of the technician is required', undefined];
        if(!email) return ['Email of the technician is required', undefined];
        if(!phoneNumber) return ['Phone number of the technician is required', undefined];

        return [undefined, new CreateTechnicianDto(name, email, phoneNumber)];

    }

}