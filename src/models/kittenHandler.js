import mongoose from "mongoose";

export default class kittenHandler {
    constructor()
    {
        this.KittenModel = mongoose.model.getCollectionName("Kittens");
    }

    getKittens()
    {
        return this.KittenModel.find({})
            .then(kittens => console.log(kittens))
            .catch(err => console.log(err));
    }

    getKitten(name)
    {
        return this.KittenModel.findOne({"name": name}).then(result => console.log(result)).catch(e => console.log(e));
    }

    postKitten(name, color, primaryQuality, primaryDefault, kibbles, secondQuality = null)
    {
        return this.KittenModel.create(
        {
            name: name,
            color: color,
            primaryQuality: primaryQuality,
            secondQuality: secondQuality,
            primaryDefault: primaryDefault,
            kibbles: kibbles,
            isAvailable: true

        }).then(result => console.log(result))
            .catch(err => console.log(err))
    }

    putKitten(id, name = null, color = null, primaryQuality = null, primaryDefault = null, kibbles = null, secondQuality = null)
    {
        return this.KittenModel.update(
            {
                "id" : ObjectId(id)
            },
            {
                $set:
                {
                    "name": name,
                    "color": color,
                    "primaryQuality": primaryQuality,
                    "primaryDefault": primaryDefault,
                    "kibbles": kibbles,
                    "secondQuality": secondQuality
                }
            })
    }

    killKitten(id)
    {
        return this.KittenModel.remove({'id': ObjectId(id)}).then(result => console.log(result)).catch(e => console.log(e));
    }

}