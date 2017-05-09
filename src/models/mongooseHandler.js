import Config from "config";
import Mongoose from "mongoose";
import KittenModel from "kittenModel";

export default class kittenHandler extends Mongoose
{
    constructor(methodName)
    {
        super();
        this.dbConfig = Config.get('Config.dbConfig');
        this.KittenModel = this.model("KittenModel");

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
}