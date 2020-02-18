/**
 * @param options
 * @optionalParam hash - The hash of the content requested to pin	
 * @optionalParam fileName - The name of the file, with the fully qualified path, that you're attempting to pin. Will only pin the latest version of the file.	
 * @return {Object} response - An object containing the hash that has been pinned.
*/
module.exports = async function(options) {
    var pinningObject
    if(!this._util.isDefined(options.hash) && !this._util.isDefined(options.fileName)) {
        this._assertError.assertPinCaseUndefinedError()
    }
    else if(this._util.isDefined(options.hash)) {
        pinningObject = {
            hash : options.hash
        }
    } 
    else if(this._util.isDefined(options.fileName)) {
        pinningObject = {
            fileName : options.fileName
        }
    }
    try {
        return await this._fileApi.send('POST','addpin',pinningObject)
    }catch(e) {
        return e
    }
}