import Express from "express";
import path from "path";
import mongooseHandler from "./models/mongooseHandler";

const app = Express();

//const mongoose = new mongooseHandler();

app.set('view engine', 'twig');
app.set('views', path.join(__dirname, '../src/views/'));


app.get('/', (req, res) => {
    res.render('kitten.twig');
});

app.listen(3000, () => console.log("connected on port 3000"));

