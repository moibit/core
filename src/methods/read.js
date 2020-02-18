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
    try {
        return await this._fileApi.send('POST','readfile',payload,responseType)
    }catch(e) {
        return e
    }
}