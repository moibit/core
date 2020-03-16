/**
 * @param {string} path - The fully qualified path of a file or folder.	
 * @return {Object} result - complete detail of file or folder
 */
module.exports = async function(path) {
    if(!this._util.isDefined(path)) {
        this._assertError.assertUndefinedError('path')
    }
    const payload = {
        path : path
    }
    try {
        return await this._fileApi.send('POST','filestatus',payload)
    }
    catch(e) {
        return e
    }
}
