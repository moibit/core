/**
 * @param {string} path absolute moibit path of the file
 * @param options
 * @optionalParam recursive - Recursively remove directories. Default:"false"	
 * @optionalParam allVersions - Remove all versions of this file. Default:"false"
 * @return {Object} response - Returns the path of the file or folder removed.
*/
module.exports = async function(path,options) {
    if(!isDef(path)) {
        notDefinedError('path')
    }
    let payload = {
        path : path,
        ...makeOptionsGoCompactable(options)
    }
    try {
        return await this.fileApi.send('POST','remove',payload)
    }catch(e) {
        return e
    }
}