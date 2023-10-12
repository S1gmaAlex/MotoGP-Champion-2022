const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser')
const Routes = require('./routes/Routes');
const app = express();
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(cors());

app.set('view engine', 'ejs');
app.use(Routes);

//connect db
mongoose.connect(process.env.MONGODB_URL)
    .then(() =>
        console.log("Connected To MongoDB")
    )
    .catch((err) => {
        console.log(err);
    })

app.listen(8000, () => {
    console.log(`server is running at http://localhost:${8000}`)
})


