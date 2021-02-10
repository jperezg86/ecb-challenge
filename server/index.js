const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const cors = require("cors");

require('dotenv').config();
 
const routes = require('./routes');

app.use(cors());
app.use(bodyParser.json());

app.use("/",routes);

const URL_CONNECTION = process.env.MONGO_DB_STRING_CONNECTION;

mongoose.connect(URL_CONNECTION, {useNewUrlParser : true}).then(
    () => {
        console.log("MONGODB SUCCESS CONNECTED");
    },
    (error) => {
        console.log(error);
    }
).catch(error => {
    console.log(error);
});


app.listen(port, () => console.log(`Backend app listening at http://localhost:${port}`))