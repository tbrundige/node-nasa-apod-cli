#!/usr/bin/env node

const asciify = require('asciify-image');
const dotenv = require('dotenv');
dotenv.config();


const baseURL = 'https://api.nasa.gov/planetary/apod?api_key=';
const apiKey = process.env.NASA_API_KEY;
const url = baseURL + apiKey;

const currentTerminalWidth = process.stdout.columns;
const currentTerminalHeight = process.stdout.rows - 1;

const options = {
    fit: 'box',
    width: currentTerminalWidth,
    height: currentTerminalHeight

};

const GetAPOD = async (asciiOptions, url) => {
    const response = await fetch(url);
    const body = await response.json()
    const imageURL = body.url;

    asciify(imageURL, asciiOptions, (err, asciifiedImage) => {
        if (err) throw err;

        console.log(asciifiedImage);

    });
}

GetAPOD(options, url);
