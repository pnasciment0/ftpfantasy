const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const request = require('request');
const cheerio = require('cheerio');

require('dotenv').config();

let rp = require('request-promise');

const app = express();

const GLOBAL_LEAGUE_ID = process.env.LEAGUE_ID;

app.use(cors({
    origin: true
}));
app.use(bodyParser.json());

app.get("/standings", (req, res) => {
   sendStandingsData();
});

async function getStandingsData() {
    let url = 'https://fantasy.espn.com/football/league/standings?leagueId=${GLOBAL_LEAGUE_ID}';
    try {
        const response = await rp(url);
        let $ = cheerio.load(response);
        return Promise.resolve("test");
    } catch (error) {
        return Promise.reject(error);
    }
}

async function sendStandingsData() {
    const res = await getStandingsData();
}

let url = `https://fantasy.espn.com/football/league/standings?leagueId=${GLOBAL_LEAGUE_ID}`;
const response = rp(url);
let $ = cheerio.load(response);
let items = $("span.teamName");
console.log(items);
for (let i = 0; i < items.length; i++) {
    console.log("test");
    console.log($(items[i]));
}


const api = functions.https.onRequest(app);
module.exports = {
    api
};
