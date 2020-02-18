const FormData = require('form-data');
const axios = require('axios');
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
            this._assertError.assertUndefinedError('path')
        }
        var form = new FormData();
        const filesArrayWithStreams = this._util.getFilesOfFolder(path);
        for(let separateStream of filesArrayWithStreams) {
            form.append('dirData',separateStream);
        }
        if(options.path !== undefined) {
            form.append('path',options.path)
        }
        form.append('pinVersion',options.pinVersion || false)

        try {
            await this._fileApi.send('POST','writefiles',form,{injectFormHeaders : true})
        }catch(e) {
            return e
        }
    } else {
        return {
            Message : this._constant.BrowserWarning
        }
    }
}