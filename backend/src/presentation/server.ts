import express from 'express';

interface Options{
    port: number;
}

export class Server {

    public readonly app = express();
    private readonly port: number
    private severListener?: any;

    constructor(options: Options){
        const {port} = options;

        this.port = port;
    }

    async start() {

        //* Middlewares
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));

        this.severListener = this.app.listen(this.port, () => {
            console.log(`Sever running on port ${this.port}`);
        });
    }

    public close() {
        this.severListener.close();
    }

}