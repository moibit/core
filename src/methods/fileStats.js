/**
 * @param {string} path - The fully qualified path of a file or folder.	
 * @return {Object} result - complete detail of file or folder
 */
module.exports = async function(path) {
    if(!isDef(path)) {
        notDefinedError('path')
    }
    const payload = {
        path : path
    }
    try {
        return await this.fileApi.send('POST','filestatus',payload)
    }
    catch(e) {
        return e
    }
}
