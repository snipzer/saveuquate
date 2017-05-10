const Config = require('config');
import Mongoose from "mongoose";

export default class mongooseHandler
{
    constructor()
    {
        this.mongoose = Mongoose;
        this.dbConfig = Config.dbConfig;
        console.log(this.dbConfig);
        this.mongoose.connect(`mongodb://${ this.dbConfig.host }:${ this.dbConfig.port }/${ this.dbConfig.dbName }`, err =>
        {
            if(err)
                console.log(err);
            else
            {
                console.log("Mongoose connected");
                this.isConnected = true;
            }
        });
    }
}