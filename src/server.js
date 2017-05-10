import path from 'path';
import _ from 'underscore';
import express from 'express';


export default class Server {
    constructor() {
        this._app = express();

        this._app.use(express.static(path.join(__dirname, '/../public')));


        this._app.set('view engine', 'twig');
        this._app.set('views', path.join(__dirname, '../src/views/'));

    }

    setPort(port) {
        if(_.isEmpty(port)) {
            port = 3000;
        }

        this.port = port;
    }

    _initControllers() {
        //const userCtrl = new UserCtrl();

        this._app.get('/', (req, res) =>
        {
            res.render('kitten');
        });
    }

    run() {
        this._initControllers();

        this._app.listen(this.port, () => console.log(`Server listening on port ${this.port}!`))
    }
}