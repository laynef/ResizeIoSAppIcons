#!/usr/bin/env node

const { exec } = require('shelljs');

const options = [
    { resolution: 40, prefix: `iphone_notif_x2` },
    { resolution: 60, prefix: `iphone_notif_x3` },
    { resolution: 58, prefix: `iphone_settings_x2` },
    { resolution: 87, prefix: `iphone_settings_x3` },
    { resolution: 80, prefix: `iphone_spotlight_x2` },
    { resolution: 120, prefix: `iphone_spotlight_x3` },
    { resolution: 120, prefix: `iphone_app_x2` },
    { resolution: 180, prefix: `iphone_app_x3` },
    { resolution: 20, prefix: `ipad_notif` },
    { resolution: 40, prefix: `ipad_notif_x2` },
    { resolution: 29, prefix: `ipad_settings` },
    { resolution: 58, prefix: `ipad_settings_x2` },
    { resolution: 40, prefix: `ipad_spotlight` },
    { resolution: 80, prefix: `ipad_spotlight_x2` },
    { resolution: 76, prefix: `ipad_app` },
    { resolution: 152, prefix: `ipad_app_x2` },
    { resolution: 167, prefix: `ipad_pro_app` },
    { resolution: 1024, prefix: `app_store` },
];

const image_path = process.argv[2] || '';
const regex_path = new RegExp(`\/`, 'g');

if (regex_path.test(image_path)) {

    const path_trail = image_path.split('/');
    const file_name = path_trail.pop();

    options.forEach((data) => {
        const num = data.resolution;
        const prefix = data.prefix;
        const size = `${num}x${num}`;
        const new_file_name = `${prefix}_${file_name}`;
        const new_file_path = path_trail.slice(0).concat([new_file_name]).join('/');
        
        exec(`magick convert ${image_path} -resize ${size} ${new_file_path}`);
    });

    console.log(`Created all assets for ios`);

} else {
    console.log(
`iOS App Icon Image Resizing

appicon (path-to-image)
`)
}
