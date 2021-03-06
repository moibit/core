const FormData = require('form-data');
const fs = require('fs');
/**
 * @param {Object} path absolute path of folder in local fs
 * @param {Object} options optional attributes while adding the file
 ** @optionalParam path - path where the file to be inserted in your moibit root
 ** @optionalParam pinVersion - Ensures that the version of the file uploaded won't be unpinned (and become eligible for garbage collection) when another version of the same file is uploaded (in the future). Default:"false"
 * @return {Object} result - Returns an MoiBit file object or error
*/
module.exports = async function(path,options={}) {
    if (typeof window === 'undefined') {
        if(!this._util.isDefined(path)) {
            this._assertError.assertUndefinedError('Local path')
        }
        try {
            /* Getting actual folder name that user intented to upload */
            const actualFolderName = '/'+path.split('/').splice(-1)[0];

            let form = new FormData();
            let allFilesOfFolder = await this._util.getFilesOfFolder(path);

            for (const filePath of allFilesOfFolder) {
                form.append('dirData',fs.createReadStream(filePath),filePath.replace(path,''));
            }

            /* Overriding form to maintain folder hirarchy */
            form['_streams'] = this._util.overrideFormFilename(form,path,allFilesOfFolder);

            form.append('path',options.path || actualFolderName);
            if(this._util.isDefined(options.path)) {
                form.append('pinVersion',options.path ? 'true' : !options.path ? 'false' : options.path);     
            }
            return await this._fileApi.send('POST','writefiles',form,{injectFormHeaders : true})
        }catch(e) {
            return e
        }
    } else {
        return {
            Message : this._constant.BrowserWarning
        }
    }
}