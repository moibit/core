module.exports = function(filename) {
    const fs = require('fs')
    const path = require('path')
    const sampleFilePath = path.join(process.cwd(),filename)
    try {
        fs.unlinkSync(sampleFilePath)
    } catch(err) {
        console.error(err)
    }
}