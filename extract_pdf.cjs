const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('Rescotec_Catalogue_compressed.pdf');

pdf(dataBuffer).then(function (data) {
    console.log(data.text);
}).catch(err => {
    console.error("Error parsing PDF:", err);
});
