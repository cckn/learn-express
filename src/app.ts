import * as express from 'express';
import { inherits } from 'util';
import catsRouter from './cats/cats.route';

class Server {
    app: express.Express;
    port: number = 8000;

    constructor() {
        this.app = express();
    }

    init() {
        this.setMiddleware();
        this.listen();
    }

    private setRouter() {
        this.app.use(catsRouter);
    }

    private setMiddleware() {
        //* logging middleware
        this.app.use((req, res, next) => {
            console.log(req.rawHeaders[1]);
            next();
        });
        //* json middleware
        this.app.use(express.json());

        //* Router
        this.setRouter();

        //* 404 middleware
        this.app.use((req, res, next) => {
            console.log('this is not found ');
            res.send({ error: '404' });
        });
    }

    private listen() {
        this.app.listen(this.port, () => {
            console.log('server is on...');
        });
    }
}

function main() {
    const server = new Server();
    server.init();
}

main();
