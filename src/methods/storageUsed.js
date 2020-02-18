/**
 * @param {string} path - path of folder hierarchy you want to create
 * @return {Object} result - acknowledge the mkdir request
*/
module.exports = async function(unit) {
    if(!this._util.isDefined(unit)) {
        this._assertError.assertUndefinedError('Unit')
    }
    unit = unit.toUpperCase()
    if(this._util.isValidUnit(unit)) {
        const B = 1
        const KB = B * 1024
        const MB = KB * 1024
        const GB = MB * 1024
        const TB = GB * 1024
        let Unit = eval(unit)
        let res = await this._fileApi.send('GET','storageused')
        res.data.data['storageUsed'] = res.data.data['storageUsed'] / Unit
        res.data.data['unit'] = unit
        return res 
    }         
    else {
        this._assertError.assertInvalidUnitError(unit)
    } 
}
