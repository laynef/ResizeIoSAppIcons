#!/usr/bin/env node


const path = require('path');
const { exec } = require('shelljs');

const resolutions = [
    40,
    60,
    58,
    87,
    80,
    120,
    180,
    20,
    29,
    76,
    156,
    167,
    1024,
];

const image_path = process.argv[0];
const path_trail = image_path.split('/');
const file_name = path_trail.pop();

resolutions.forEach((num) => {
    const size = `${num}x${num}`;
    const new_file_name = `${size}_${file_name}`;
    const new_file_path = path_trail.concat([new_file_name]).join('');
    exec(`magick convert ${path.resolve(__dirname, image_path)} -resize ${size} ${path.resolve(__dirname, new_file_path)}`);
});

console.log(`Created all assets for ios`);
