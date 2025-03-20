
export class CreateUserDto {

    constructor(
        public readonly role: string,
        public readonly email: string,
        public readonly password: string,
        public readonly name: string,
        public readonly store: string,
        public readonly emailValidated: boolean,
        public readonly isActive: boolean,
    ){}

    static create(props: { [key: string]: any }) : [string?, CreateUserDto?] {

        const {
            role,
            email,
            password,
            name,
            store,
            emailValidated = false,
            isActive = false
        } = props

        if(!role) return ['Role is Required', undefined];
        if(!email) return ['Email is Required', undefined];
        if(!password) return ['Password is Required', undefined];
        if(password.length < 6) return ['Password should have more than 5 characters', undefined];
        if(!name) return ['Name is Required', undefined];
        if(!store) return ['Store is Required', undefined];

        return [undefined, new CreateUserDto(role, email, password, name, store, emailValidated, isActive)];
    }

}