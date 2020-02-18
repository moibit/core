module.exports = {
    assertUndefinedError : function(parameter) {
        return new Error(parameter+' cannot be undefined')
    }
}