const fs = require('fs');
const path = require('path');
const AWS = require('aws-sdk');

AWS.config.update({
    accessKeyId: 'AKIAXYKJSWKAU5G7XACB',
    secretAccessKey: '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',
    region: 'ap-south-1'
});

const s3 = new AWS.S3();
const imagesFolder = './Images';
const outputJsonFile = 'output.json';
const imagesData = [];

// Read existing data from the output JSON file
let existingData = [];
try {
    existingData = JSON.parse(fs.readFileSync(outputJsonFile));
} catch (error) {
    console.error('Error reading existing data from output JSON file:', error);
}

fs.readdir(imagesFolder, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        const filePath = path.join(imagesFolder, file);
        const fileStream = fs.createReadStream(filePath);
        const params = {
            Bucket: 'dinzo',
            Key: file,
            Body: fileStream
        };

        s3.upload(params, (err, data) => {
            if (err) {
                console.error('Error uploading image:', err);
            } else {
                console.log('Image uploaded successfully:', data.Location);
                const urlParams = { Bucket: 'dinzo', Key: file, Expires: 3600 };

                s3.getSignedUrl('getObject', urlParams, (err, url) => {
                    if (err) {
                        console.error('Error generating URL:', err);
                    } else {
                        console.log('Pre-signed URL:', url);
                        imagesData.push({name:file, url: url });

                        // Write image data to output JSON file after all images are processed
                        if (imagesData.length === files.length) {
                            // Combine existing data with new data
                            const combinedData = existingData.concat(imagesData);

                            fs.writeFile(outputJsonFile, JSON.stringify(combinedData, null, 2), err => {
                                if (err) {
                                    console.error('Error writing to output JSON file:', err);
                                } else {
                                    console.log('Output JSON file updated successfully.');
                                }
                            });
                        }
                    }
                });
            }
        });
    });
});
