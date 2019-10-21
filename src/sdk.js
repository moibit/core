var ApiClient = require('./apiClient')
var isDef = require('./utils/isDef')
const axios = require('axios')
var FormData = require('form-data')
module.exports = class {

    /**
     * @constructor initializes and provides api client for crud operations
    */
    constructor(baseUrl,accessToken) {
        this.fileApi = new ApiClient(baseUrl+'/moibit',accessToken)
    }
    
    /**
     * @param {Object} file it is an file object that contains name,size etc of the file
     * @param {string} filePath path of the file at where file to be inserted
     * @param {Object} options optional attributes while adding the file
     * @return {Object} result - Returns an kfs file object or error
     */
    async add(file,filePath,options={}) {
        if(!isDef(filePath)) {
            throw new Error('File Path cannot be undefined')
        }
        if (typeof window !== 'undefined') {
            var form = new FormData()
            form.append('file',file)
            form.append('fileName','/'+filePath)
            form.append('createFolders',options.createFolders || true)
            form.append('pinVersion',options.pinVersion || false)
            let res = await this.fileApi.send('POST','writefile',form)
            if(res.status === 200) {
                return res.data.data
            }
            else {
                return res
            }
        }
        else {  
            var form = new FormData()
            form.append('file',file)
            form.append('fileName','/'+filePath)
            let res = await axios({
                url : this.fileApi.baseUrl+'/writefile',
                method : 'POST',
                headers : {
                    ...form.getHeaders(),
                    "api_key" : this.fileApi.accessToken.public,
                    "api_secret" : this.fileApi.accessToken.secret
                },
                data : form
            })
            if(res.status === 200) {
                return res.data.data
            }
            else {
                return res
            }
        }
    }

    /**
     * @param {string} filename complete path of the fil
     * @param responseType indicates the type of data that the server will respond with
     * options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
     * browser only: 'blob'
        responseType: 'json', by default
     * @return {Object} result - Returns content of the file else error
    */
    async read(filename,responseType) {
        if(!isDef(filename)) {
            throw new Error('File Path cannot be undefined')
        }
        let payload = {
            fileName : '/'+filename
        }
        let res = await this.fileApi.send('POST','readfile',payload,responseType)
        if(res.status === 200) {
            return {
                data : res.data,
                contentType : res.headers['content-type']
            }
        }
        else {
            return res
        }
    }

    /**
     * @param {string} hash multihash of the file
     * @param responseType indicates the type of data that the server will respond with
     * options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
     * browser only: 'blob'
        responseType: 'json', by default
     * @return {Object} result - Returns a content of file from hash else error
     */
    async readFromHash(hash,responseType) {
        if(!isDef(hash)) {
            throw new Error('File hash cannot be undefined')
        }
        let payload = {
            hash : hash
        }
        let res = await this.fileApi.send('POST','readfilebyhash',payload,responseType)
        if(res.status === 200) {
            return res.data
        }
        else {
            return res
        }
    }

    /**
     * @param {string} folderpath complete path of the folder to list down
     * @return {Object} result - Returns list of file object else error
     */
    async list(folderpath) {
        let payload = {
            path : folderpath===undefined ? '/' : '/'+folderpath
        }
        let res = await this.fileApi.send('POST','listfiles',payload)
        if(res.status === 200) {
            return res.data.data.Entries
        }
        else {
            return res
        }
    }

    /**
     * @param {string} absoluteFilePath it need to be an absolute path ie., <parentfolder/subfolder/filename.extension>
     * @return {Object/Boolean} result - Returns boolean on remove else error
     */
    async remove(absoluteFilePath) {
        if(!isDef(absoluteFilePath)) {
            throw new Error('File Path cannot be undefined')
        }
        let payload = {
            path : '/'+absoluteFilePath
        }
        let res = await this.fileApi.send('POST','remove',payload)
        if(res.status === 200) {
            return true
        }
        else {
            return res
        }
    }

    /**
     * @param {Object} options 
     * options.hash , hash of the file object to be pinned 
     * options.filename , absolute file path of file object to be pinned
     * @return {Object/Boolean} result - Returns boolean on pin else error
     */
    async pin(options) {
        var pinningObject
        if(!isDef(options.hash) && !isDef(options.filename)) {
            throw new Error('Both options.hash and options.filename cannot be undefined')
        }
        else if(isDef(options.hash)) {
            pinningObject = {
                hash : options.hash
            }
        } 
        else if(isDef(options.filename)) {
            pinningObject = {
                fileName : '/'+options.filename
            }
        }
        let res = await this.fileApi.send('POST','addpin',pinningObject)
        if(res.status === 200) {
            return true
        }
        else {
            return res
        }
    }

    /**
     * @param {Object} options 
     * options.hash , hash of the file object to be unpinned 
     * options.filename , absolute file path of file object to be unpinned
     * @return {Object/Boolean} result - Returns boolean on unpin else error
     */
    async unpin(options) {
        var pinningObject
        if(!isDef(options.hash) && !isDef(options.filename)) {
            throw new Error('Both options.hash and options.filename cannot be undefined')
        }
        else if(isDef(options.hash)) {
            pinningObject = {
                hash : options.hash
            }
        } 
        else if(isDef(options.filename)) {
            pinningObject = {
                fileName : '/'+options.filename
            }
        }
        let res = await this.fileApi.send('POST','removepin',pinningObject)
        if(res.status === 200) {
            return true
        }
        else {
            return res
        }
    }

    /**
     * Complete detail of the file
     * @param {string} absoluteFilePath 
     * @return {Object} result - Returns complete file detail else error
     */
    async filedetail(absoluteFilePath) {
        if(!isDef(absoluteFilePath)) {
            throw new Error('File Path cannot be undefined')
        }
        let payload = {
            path : '/'+absoluteFilePath
        }
        let res = await this.fileApi.send('POST','filestatus',payload)
        if(res.status === 200) {
            return res.data.data
        }
        else {
            return res
        }
    }

    /**
     * @param {string} unit specifies in which unit you want the storage to be return
     * @return {Object} result - Returns object which gives storage details else error
     */
    async storagedetails(unit) {
        unit = unit.toUpperCase()
        var isValidUnit = require('./utils/isValidUnit')
        if(isValidUnit(unit)) {
            const B = 1
            const KB = B * 1024
            const MB = KB * 1024
            const GB = MB * 1024
            const TB = GB * 1024
            let Unit = eval(unit)
            let res = await this.fileApi.send('GET','storageused')
            res.data.data['storageUsed'] = res.data.data['storageUsed'] / Unit
            res.data.data['storageAvailable'] = res.data.data['storageAvailable'] / Unit
            res.data.data['storageLimit'] = res.data.data['storageLimit'] / Unit
            res.data.data['unit'] = unit
            return res.data.data  
        }         
        else {
            throw new Error("`"+unit+"` Not a valid shorthand storage unit")
        } 
    }
}