
export class LoginUserDto {

    constructor(
        public email: string,
        public password: string,
    ){}

    static login(props: {[key: string]:any}) : [string?, LoginUserDto?] {

        const { email, password } = props;

        if(!email) return ['Email is required', undefined];
        if(!password) return ['Password is required', undefined];

        return [undefined, new LoginUserDto(email, password)];

    }

}