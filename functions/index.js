const functions = require('firebase-functions');
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
const cheerio = require('cheerio');

require('dotenv').config();

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
    const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${GLOBAL_LEAGUE_ID}?view=mTeam`;
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

async function BLAH() {
    const url = `https://fantasy.espn.com/apis/v3/games/ffl/seasons/2019/segments/0/leagues/${GLOBAL_LEAGUE_ID}?view=mTeam`;
    axios.get(url)
        .then(response => {
            var teams = response.data.teams;
            teams.forEach(function (team) {
               console.log(team.abbrev);
            });
        })
        .catch(error => {
            return Promise.reject(error.response.data);
        })
}

BLAH();
// ===================== Exports =====================

const api = functions.https.onRequest(app);

module.exports = {
    api
};