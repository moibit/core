module.exports = {
    assertUndefinedError : function(parameter) {
        throw new Error(parameter+' cannot be undefined')
    },
    assertPinCaseUndefinedError : function() {
        throw new Error('Both options.hash and options.fileName cannot be undefined')
    },
    assertPinCaseUndefinedError : function(unit) {
        throw new Error("`"+unit+"` not a valid shorthand storage unit")
    }
}