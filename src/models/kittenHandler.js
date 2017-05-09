import Config from "config";
import Mongoose from "mongoose";
import kittenModel from "./kittenModel";
import Event from "events";

class kittenHandler extends Mongoose
{
    constructor(methodName)
    {
        super();
        this.dbConfig = Config.get('Config.dbConfig');
        this.KittenModel = kittenModel;

        this.init(methodName);
    }

    init(methodName)
    {
        this.connect(`mongodb://${ this.dbConfig.host }:${ this.dbConfig.port }/${ this.dbConfig.dbName }`, err =>
        {
            if(err)
                console.log(err);
            else
                console.log("Mongoose connected")

            return this.getMethod(methodName)();
        });
    }

    getMethod(methodName)
    {
        switch (methodName)
        {
            case "getKittens":
                return this.getKittens;
                break;
            case "getKitten":
                return this.getKitten;
                break;
            case "postKitten":
                return this.postKitten;
                break;
            case "putKitten":
                return this.putKitten;
                break;
            case "killKitten":
                return this.killKitten;
                break;
            default:
                return undefined;
        }
    }

    getKittens()
    {
        this.KittenModel.find({})
            .then(kittens => console.log(kittens))
            .catch(err => console.log(err));
    }

    getKitten() {}

    postKitten() {}

    putKitten() {}

    killKitten() {}

}
export default kittenHandler;