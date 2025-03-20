
export class UpdateUserDto {

    constructor(
        public readonly role: string,
        public readonly email: string,
        public readonly password: string,
        public readonly isActive: boolean,
    ){}

    get values() {
        const returnObject: {[key: string]:any} = {};

        if(this.role) returnObject.role = this.role;
        if(this.email) returnObject.email = this.email;
        if(this.password) returnObject.password = this.password;
        if(this.isActive) returnObject.isActive = this.isActive;

        return returnObject;
    }

    static update(props: {[key: string]:any}) : [string?, UpdateUserDto?] {

        const { role, email, password, isActive } = props;

        if(password.length < 6) return ['Password should have more than 5 characters', undefined];

        return [undefined, new UpdateUserDto(role, email, password, isActive)];

    }

}