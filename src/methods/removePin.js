/**
 * @param options
 * @optionalParam hash - The hash of the content to be unpinned	
 * @optionalParam fileName - The name of the file, with the fully qualified path, that you're attempting to unpin. Will only unpin the latest version of the file.	
 * @return {Object} response - An object containing the hash that has been un pinned.
*/
module.exports = async function(options) {
    var unpinningObject
    if(!isDef(options.hash) && !isDef(options.fileName)) {
        throw new Error('Both options.hash and options.fileName cannot be undefined')
    }
    else if(isDef(options.hash)) {
        unpinningObject = {
            hash : options.hash
        }
    } 
    else if(isDef(options.filename)) {
        unpinningObject = {
            fileName : options.fileName
        }
    }
    try {
        return await this.fileApi.send('POST','addpin',unpinningObject)
    }catch(e) {
        return e
    }
}