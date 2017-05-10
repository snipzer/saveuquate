import KittenHandler from "../models/kittenHandler";
import _ from "underscore";

export default class KittenController {

    constructor()
    {
        this.KittenHandler = new KittenHandler();
    }

    index(req, res) {

        res.render('kitten', {
            Kittens: this.KittenHandler.getKittens(),
        });
    }

    getKittens(req, res)
    {

        this.KittenHandler.getKittens().then(result =>
        {
            res.json(result);
        }).catch(e => console.log(e));
    }

    getKitten(req, res)
    {
        const id = req.params.id;

        this.KittenHandler.getKitten(id)
            .then(result =>
            {
                res.json(result);
            }).catch(e => console.log(e));
    }

    postKitten(req, res)
    {
        const param = req.body;

        this.KittenHandler.postKitten(param.name, param.color, param.primaryQuality, param.primaryDefault, param.kibbles, param.secondQuality)
            .then(result =>
            {
                res.json(result);
            }).catch(e => console.log(e));
    }

    putKitten(req, res)
    {
        const param = req.body;

        let array = {
            name: (!_.isEmpty(param.name)) ? param.name:null,
            color: (!_.isEmpty(param.color)) ? param.color:null,
            primaryQuality: (!_.isEmpty(param.primaryQuality)) ? param.primaryQuality:null,
            primaryDefault: (!_.isEmpty(param.primaryDefault)) ? param.primaryDefault:null,
            kibbles: (!_.isEmpty(param.kibbles)) ? param.kibbles:null,
            secondQuality: (!_.isEmpty(param.secondQuality)) ? param.secondQuality:null
        };


        this.KittenHandler.putKitten(param.id, array)
            .then((result) => res.json(result))
            .catch(e => console.log(e));
    }

    killKitten(req, res)
    {
        this.KittenHandler.killKitten(req.body.id).then(result =>
        {
            res.json(result);
        }).catch(e => console.log(e));
    }

}