module.exports = function() {
    const fs = require('fs')
    const path = require('path')
    const testFilePath = path.join(process.cwd(),'/test.txt');
    const testFileHashPath = path.join(process.cwd(),'/test_hash.txt');
    try {
        fs.unlinkSync(testFilePath);
        fs.unlinkSync(testFileHashPath);
    } catch(err) {
        console.error(err)
    }
}
