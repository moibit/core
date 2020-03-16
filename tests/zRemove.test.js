describe('remove',function() {
    it(": this case is to remove an existing file with all versions",async function() {
        var bool = false
        try {
            let result = await this._sdk.remove('/test.txt',{allVersions : true})
            await this._sdk.remove('/newTestFile.txt',{allVersions : true})
            bool = result.data.meta['code'] === 200
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
    it(": this case is remove a folder",async function() {
        var bool = false
        try {
            let result = await this._sdk.remove('/node_modules',{recursive : true});
            await this._sdk.remove('/myAwesomeDirectory',{recursive : true});
            await this._sdk.remove('/testFolder',{recursive : true});
            bool = result.data.meta['code'] === 200
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})
