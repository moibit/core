/**
 * @param options
 * @optionalParam hash - The hash of the content requested to pin	
 * @optionalParam fileName - The name of the file, with the fully qualified path, that you're attempting to pin. Will only pin the latest version of the file.	
 * @return {Object} response - An object containing the hash that has been pinned.
*/
module.exports = async function(options) {
    var pinningObject
    if(!isDef(options.hash) && !isDef(options.fileName)) {
        throw new Error('Both options.hash and options.fileName cannot be undefined')
    }
    else if(isDef(options.hash)) {
        pinningObject = {
            hash : options.hash
        }
    } 
    else if(isDef(options.filename)) {
        pinningObject = {
            fileName : options.fileName
        }
    }
    try {
        return await this.fileApi.send('POST','addpin',pinningObject)
    }catch(e) {
        return e
    }
}