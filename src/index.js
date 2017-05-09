import Express from "express";
const kittenHandler = require('./models/kittenHandler');


const app = Express();

const kittens = kittenHandler("getKittens");

console.log(kittens);
app.listen(3000, () => console.log("connected on port 3000"));

