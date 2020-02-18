/**
 * @param {Object} file it is an file object that contains name,size etc of the file
 * @param {Object} options optional attributes while adding the file
 ** @optionalParam path - path where the file to be inserted in your moibit root
 ** @optionalParam createFolders - create folder if folder mentioned in path doesn't exist Default:'true
 ** @optionalParam pinVersion - Ensures that the version of the file uploaded won't be unpinned (and become eligible for garbage collection) when another version of the same file is uploaded (in the future). Default:"false"
 * @return {Object} result - Returns an MoiBit file object or error
*/
module.exports = async function(file,options={}) {
    if(!isDef(file)) {
        throw new Error('File cannot be undefined')
    }
    const fileOptions = makeOptionsGoCompactable(options);
    if (typeof window !== 'undefined') {
        var form = new FormData()
        form.append('file',file)
        form.append('fileName','/'+fileOptions.fileName || '/'+file.name)
        form.append('createFolders',fileOptions.createFolders || 'true')
        form.append('pinVersion',fileOptions.pinVersion || 'false')
        return await this.fileApi.send('POST','writefile',form)
    }
    else {
        return {
            Message : Constants.NonBrowserWarning
        }
    }
}