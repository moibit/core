module.exports = function(options) {
    const optionParameters = Object.keys(options);
    for(let parameter of optionParameters) {
        if(options[parameter]) {
            options[parameter] = 'true'
        }else {
            options[parameter] = 'false'
        }
    }
    return options
}