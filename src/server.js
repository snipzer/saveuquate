import path from 'path';
import _ from 'underscore';
import express from 'express';
import bodyParser from 'body-parser';

import KittenController from './controller/kittenController';


export default class Server {
    constructor()
    {
        this._app = express();

        this._app.use(express.static(path.join(__dirname, '/../public')));


        this._app.use(bodyParser.json());
        this._app.use(bodyParser.urlencoded({ extended: true }));


        this._app.set('view engine', 'twig');
        this._app.set('views', path.join(__dirname, '../src/views/'));
    }

    setPort(port)
    {
        if(_.isEmpty(port))
        {
            port = 3000;
        }

        this.port = port;
    }

    _initControllers()
    {
        const kittenController = new KittenController();

        this._app.get('/', kittenController.index.bind(kittenController));

        this._app.get('/showAll', kittenController.showAll.bind(kittenController));

        this._app.get('/showNonAdopted', kittenController.showNonAdopted.bind(kittenController));

        this._app.get('/v1/kittens', kittenController.getKittens.bind(kittenController));

        this._app.get('/v1/kittens/:id', kittenController.getKitten.bind(kittenController));

        this._app.post('/v1/kittens', kittenController.postKitten.bind(kittenController));

        this._app.put('/v1/kittens', kittenController.putKitten.bind(kittenController));

        this._app.delete('/v1/kittens', kittenController.killKitten.bind(kittenController));
    }

    run()
    {
        this._initControllers();

        this._app.listen(this.port, () => console.log(`Server listening on port ${this.port}!`));
    }
}