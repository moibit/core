/**
 * @param {string} path - The name of the folder with the fully qualified path. Defaults to the root folder ‘/’	
 * @return {Object} result - list of files inside specified folder
 */
module.exports = async function(path) {
    if(!this._util.isDefined(path)) {
        path = '/'
    }
    const payload = {
        path : path
    }
    try {
        return await this._fileApi.send('POST','listfiles',payload)
    }
    catch(e) {
        return e
    }
}
