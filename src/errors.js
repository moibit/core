module.exports = {
    notDefinedError : function(parameter) {
        return new Error(parameter+' cannot be undefined')
    }
}