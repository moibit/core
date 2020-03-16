/**
 * @param {string} filename absolute moibit path of the file
 * @param responseType indicates the type of data that the server will respond with
 * options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
 * browser only: 'blob'
    responseType: 'json', by default
    * @return {Object} result - Returns content of the file else error
*/
module.exports = async function(filename,responseType) {
    if(!this._util.isDefined(filename)) {
        this._assertError.assertUndefinedError('fileName')
    }
    let payload = {
        fileName : filename
    }
    let readOptions = {
        responseType : !this._util.isDefined(responseType) ? 'json' : responseType
    }
    try {
        return await this._fileApi.send('POST','readfile',payload,readOptions)
    }catch(e) {
        return 
    }
}