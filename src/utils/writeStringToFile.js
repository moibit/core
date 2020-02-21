module.exports = function(path,str) {
    const fs = require('fs');
    var writeStream = fs.createWriteStream(path);
    writeStream.write(str)
    writeStream.end()
}