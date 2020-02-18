/**
 * @param {Object} files array of file objects where each contains name,size etc of the file
 * @param {Object} options optional attributes while adding the file
 ** @optionalParam path - path where the folder to be inserted in your moibit root
 ** @optionalParam pinVersion - Ensures that the version of the file uploaded won't be unpinned (and become eligible for garbage collection) when another version of the same file is uploaded (in the future). Default:"false"
 * @return {Object} result - Returns an MoiBit folder object or error
*/
module.exports = async function(files,options={}) {
    if(!isDef(files)) {
        throw new Error('File cannot be undefined')
    }
    if (typeof window !== 'undefined') {
        var form = new FormData()
        form.append('dirData',files)
        if(options.path !== undefined) {
            form.append('path','/'+options.path)
        }
        form.append('pinVersion',options.pinVersion || false)
        return await this.fileApi.send('POST','writefiles',form)
    }
    else {
        return {
            Message : Constants.NonBrowserWarning
        }
    }
}