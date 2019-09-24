const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const cheerio = require('cheerio');
let rp = require('request-promise');

const app = express();

app.use(cors({
    origin: true
}));

app.get("/test", (req, res) => {
   res.send("hi");
});

const api = functions.https.onRequest(app);

module.exports = {
    api
};
