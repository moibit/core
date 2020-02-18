/**
 * @param {string} fileName - The name of the file, with the fully qualified path.	
 * @return {Object} result - complete detail of file or folder
 */
module.exports = async function(fileName) {
    if(!isDef(fileName)) {
        notDefinedError('fileName')
    }
    const payload = {
        fileName : fileName
    }
    try {
        return await this.fileApi.send('POST','versions',payload)
    }
    catch(e) {
        return e
    }
}
