/**
 * @param {string} path - path of folder hierarchy you want to create
 * @return {Object} result - acknowledge the mkdir request
 */
module.exports = async function(path) {
    if(!this._util.isDefined(path)) {
        this._assertError.assertUndefinedError('path')
    }
    const payload = {
        path : path
    }
    try {
        return await this._fileApi.send('GET','makedir',payload)
    }
    catch(e) {
        return e
    }
}
