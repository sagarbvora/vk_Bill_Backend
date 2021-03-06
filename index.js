const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require('mongoose');
const passport = require("passport");
require('dotenv').config();
mongoose.Promise = global.Promise;
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
// Connecting to the database
mongoose.connect(
    process.env.MONGO_URL,
    {useFindAndModify: true, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true,})
    .then(db => {
        console.log("Database connected");
    }).catch(error => console.log("Could not connect to mongo db " + error));
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN');
    next();
});
app.use(passport.initialize());
require("./src/VK_Bill")(app);
app.use((err, req, res) => {
    res.status(503).json({
        success: false,
        error: "server_error",
    });
});
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});