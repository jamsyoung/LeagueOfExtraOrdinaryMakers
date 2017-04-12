'use strict';

const app = require('express')();

app.get('*', (req, res) => {
    res.send(`<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="mobile-web-app-capable" content="yes"><title>The League of Extraordinary Makers</title><style type="text/css">body {font-family: sans-serif; color: #1a1a1a;} .container {position: absolute; top: 25%; left: 25%; -moz-transform: translateX(-25%) translateY(-25%); -webkit-transform: translateX(-25%) translateY(-25%); transform: translateX(-25%) translateY(-25%);</style></head><body><div class="container"><h2>The League of Extraordinary Makers</h2><h1>Coming Soon</h1></div></body></html>`);
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server started on PORT ${process.env.PORT || 5000}`);
});
