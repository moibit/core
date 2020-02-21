describe('filedetail',function() {
    it(": this case is to get storage used till that instant by an account", async function() {
        var bool = false
        try {
            let result = await this._sdk.storageUsed('kb')
            bool = result !== undefined
            
            this._sdk._util.deleteTestFiles()
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})
