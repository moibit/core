var fs = require('fs');
var getStreamFromFs = require('./getStreamFromFs');
module.exports = function(path) {
    let folderStreamArray = fs.readdirSync(path);
    let filesWithStream = [];
    for(let file of folderStreamArray) {
        filesWithStream.push(getStreamFromFs(path+'/'+file))
    }
    return filesWithStream;
}
