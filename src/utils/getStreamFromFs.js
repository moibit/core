var fs = require('fs')
module.exports = function(path) {
    return fs.createReadStream(path);
}