const request = require('request');
const fs = require('fs');
var url = "https://www.dropbox.com/s/x0b5qcffmbrdtvt/new_tempest_1.tre?dl=1";
var file = fs.createWriteStream("C:\\SWGTest\\new_tempest_1.tre");
request(url).on('error', err => {
    process.send("download error " + err);
    file.close();
    fs.unlink(dest);
    if (cb) cb(err.message);
})
.on('close', e=>console.log('done'))
.pipe(file);
