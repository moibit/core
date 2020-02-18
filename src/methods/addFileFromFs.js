/**
 * @param {Object} path absolute path of file in local fs
 * @param {Object} options optional attributes while adding the file
 ** @optionalParam path - path where the file to be inserted in your moibit root
 ** @optionalParam createFolders - create folder if folder mentioned in path doesn't exist Default:'true
 ** @optionalParam pinVersion - Ensures that the version of the file uploaded won't be unpinned (and become eligible for garbage collection) when another version of the same file is uploaded (in the future). Default:"false"
 * @return {Object} result - Returns an MoiBit file object or error
*/
module.exports = async function(path,options={}) {
    let actualFileName = path.split('/');
    if(!isDef(path)) {
        notDefinedError('path')
    }
    var form = new FormData();
    const fileFromFs = require('./utils/getStreamFromFs')(path);
    form.append('file',fileFromFs);
    form.append('fileName',options.fileName || '/'+actualFileName[actualFileName.length-1]);
    form.append('createFolders',fileOptions.createFolders || 'true')
    form.append('pinVersion',fileOptions.pinVersion || 'false')
    if (typeof window === 'undefined') {
        try {
            return await this.fileApi.send('POST','writefile',form,{injectFormHeaders : true})
        }catch(e) {
            return e;
        }
    }
    else {
        return {
            Message : Constants.BrowserWarning
        }
    }
}