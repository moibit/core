var fs = require('fs');
var manyFiles = [];
module.exports = async function(path) {
    await recursiveWay(path);
    return manyFiles;
}

async function recursiveWay(path) {
    try {
        if(fs.lstatSync(path).isFile()) {
            return path
        }else {
            const files = await fs.promises.readdir(path);
            for (const file of files) {
                const derivedPath = path+'/'+file;
                const returnedPath = await recursiveWay(derivedPath);
                if(returnedPath !== undefined) {
                    manyFiles.push(returnedPath)
                }
            }
        }
    }catch(e) {
        console.log(e);
    }
}
