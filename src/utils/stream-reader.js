module.exports =  function(filename, cb) {
    var fs = require('fs')
    let readStream = fs.createReadStream(filename)
    let chunks = []
    
    // Handle any errors while reading
    readStream.on('error', err => {
        // File could not be read
        return cb(err)
    })

    // Listen for data
    readStream.on('data', chunk => {
        chunks.push(chunk)
    })

    // File is done being read
    readStream.on('close', () => {
        // Create a buffer of the image from the stream
        return cb(null, Buffer.concat(chunks))
    })
}