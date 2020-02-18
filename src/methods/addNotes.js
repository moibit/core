/**
 * @param {String|Object} notes - can be string or stringified JSON
 * @param {String} path - path where this file to be inserted in user space
 * @param {Object} options
 ** @optionalParam create - Create a new file if the file to which string content needs to be appended does not exist. Default: "false"
 ** @optionalParam createFolders - Create folders as needed. Otherwise, if a path specified in fileName does not exist, the operation will fail. Default:"true"
 ** @optionalParam pinVersion - Default: "false"
 */
module.exports =  async function(notes,path,options={}) {
    if(!isDef(notes)) {
        Errors.notDefinedError('notes');
    }
    if(!isDef(path)) {
        Errors.notDefinedError('path');
    }
    if(typeof notes === 'string') {
        let notesPayload = {
            fileName : path,
            text : notes,
            ...makeOptionsGoCompactable(options)
        }
        try {
            return (await this.fileApi.send('POST','writetexttofile',notesPayload))

        }catch(e) {
            return e;
        }
    }else {
        return {
            Message : Constants.NonStringNotAllowed
        }
    }
}