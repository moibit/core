var ApiClient = require('./apiClient');

function MoiBit(baseUrl,accessToken) {
    this.fileApi = new ApiClient(baseUrl+'/moibit/v0',accessToken)
}

MoiBit.prototype.addFile = require('./methods/addFile')

MoiBit.prototype.addFileFromFs = require('./methods/addFileFromFs')

MoiBit.prototype.addFolder = require('./methods/addFolder')

MoiBit.prototype.addFolderFromFs = require('./methods/addFolderFromFs')

MoiBit.prototype.addNotes = require('./methods/addNotes')

MoiBit.prototype.addPin = require('./methods/addPin')

MoiBit.prototype.fileStats = require('./methods/fileStats')

MoiBit.prototype.getVersions = require('./methods/getVersions')

MoiBit.prototype.list = require('./methods/list')

MoiBit.prototype.mkdir = require('./methods/mkdir')

MoiBit.prototype.read = require('./methods/read')

MoiBit.prototype.readFileByHash = require('./methods/readFileByHash')

MoiBit.prototype.remove = require('./methods/remove')

MoiBit.prototype.removePin = require('./methods/removePin')

MoiBit.prototype.storageUsed = require('./methods/storageUsed')
