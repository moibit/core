const isValidUnit = require('./utils/isValidUnit');
/**
 * @param {string} path - path of folder hierarchy you want to create
 * @return {Object} result - acknowledge the mkdir request
*/
module.exports = async function(unit) {
    if(!isDef(unit)) {
        notDefinedError('unit')
    }
    unit = unit.toUpperCase()
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
        return res 
    }         
    else {
        throw new Error("`"+unit+"` not a valid shorthand storage unit")
    } 
}
