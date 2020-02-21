var fs = require('fs');
module.exports = async function(path) {
    return await fs.promises.readdir(path);
}
