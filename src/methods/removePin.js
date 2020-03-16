/**
 * @param options
 * @optionalParam hash - The hash of the content to be unpinned	
 * @optionalParam fileName - The name of the file, with the fully qualified path, that you're attempting to unpin. Will only unpin the latest version of the file.	
 * @return {Object} response - An object containing the hash that has been un pinned.
*/
module.exports = async function(options) {
    var unpinningObject;
    if(!this._util.isDefined(options.hash) && !this._util.isDefined(options.fileName)) {
        this._assertError.assertPinCaseUndefinedError()
    }
    else if(this._util.isDefined(options.hash)) {
        unpinningObject = {
            hash : options.hash
        }
    } 
    else if(this._util.isDefined(options.fileName)) {
        unpinningObject = {
            fileName : options.fileName
        }
    }
    try {
        return await this._fileApi.send('POST','addpin',unpinningObject)
    }catch(e) {
        return e
    }
}