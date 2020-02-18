describe('filedetail',function() {
    it(": this case is to get storage used till that instant by an account", async function() {
        var bool = false
        try {
            let result = await this._sdk.storageUsed('kb')
            bool = result !== undefined
            console.log('Storage Details : \n')
            console.log(result);
            
            var DelTempFile = require('../src/utils/delTempfile')
            DelTempFile('/test_hash.txt')
            DelTempFile('/test.txt')
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})
