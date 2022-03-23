#!/usr/bin/env node

const asciify = require('asciify-image');
const axios = require('axios');

const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=';

const url = baseURL + apiKey;

const currentTerminalWidth = process.stdout.columns;
const currentTerminalHeight = process.stdout.rows;

const options = {
    fit: 'box',
    width: currentTerminalWidth,
    height: currentTerminalHeight

};

const GetAPOD = async (asciiOptions, url) => {
    let response = await axios.get(url);
    let imageURL = response.data.url;

    asciify(imageURL, asciiOptions, (err, asciifiedImage) => {
        if (err) throw err;

        console.log(asciifiedImage);

    });
}

GetAPOD(options, url);
