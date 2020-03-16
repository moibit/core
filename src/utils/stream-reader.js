module.exports =  function(filename, cb) {
    var fs = require('fs')
    let readStream = fs.createReadStream(filename)
    let chunks = []
    
    readStream.on('error', err => {
        return cb(err)
    })

    readStream.on('data', chunk => {
        chunks.push(chunk)
    })

    readStream.on('close', () => {
        return cb(null, Buffer.concat(chunks))
    })
}