module.exports = {
    deleteTemporaryFile : require('./delTempfile'),
    getStreamFromPath : require('./getStreamFromFs'),
    isDefined : require('./isDef'),
    isUrl : require('./isUrl'),
    isValidUnit : require('./isValidUnit'),
    streamReader : require('./stream-reader'),
    parseBaseUrl : function(baseUrl) {
        const _constants = require('../constants') 
        return (baseUrl + _constants.MoibitPath)
    },
    getFilesOfFolder : require('./getFilesOfFolder')
}