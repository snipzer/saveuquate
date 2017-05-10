import mongoose from "mongoose";

export default class kittenHandler
{
    constructor()
    {
        this.KittenModel = mongoose.model.getCollectionName("Kittens");
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