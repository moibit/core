/**
 * @param {string} hash absolute moibit path of the file
 * @param responseType indicates the type of data that the server will respond with
 * options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
 * browser only: 'blob'
    responseType: 'json', by default
    * @return {Object} result - Returns content of the file else error
*/
module.exports = async function(hasH,responseType) {
    if(!this._util.isDefined(hasH)) {
        this._assertError.assertUndefinedError('Hash')
    }
    let payload = {
        hash : hasH
    }
    try {
        return await this._fileApi.send('POST','readfilebyhash',payload,responseType)
    }catch(e) {
        return e
    }
}