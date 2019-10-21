module.exports = function(unit) {
    const validUnits = ['B','KB','MB','GB','TB']
    let match = validUnits.filter(u => u == unit)
    if(match.length !== 0) {
        return true
    }
    else {
        return false
    }
}