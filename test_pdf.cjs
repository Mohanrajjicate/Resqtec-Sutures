try {
    const pdf = require('pdf-parse');
    console.log("pdf-parse loaded");
    const fs = require('fs');
    console.log("fs loaded");
    const buffer = fs.readFileSync('Rescotec_Catalogue_compressed.pdf');
    console.log("File read, size: " + buffer.length);

    pdf(buffer).then(function (data) {
        console.log("PDF Parsed!");
        console.log("Text length: " + data.text.length);
        console.log("First 100 chars: " + data.text.substring(0, 100));
    }).catch(err => {
        console.error("Error parsing PDF promise:", err);
    });

} catch (e) {
    console.error("Error in script:", e);
}
