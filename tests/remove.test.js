describe('remove',function() {
    it(": this case is to remove an existing file with all versions",async function() {
        var bool = false
        try {
            let result = await this._sdk.remove('/test.txt',{allVersions : true})
            console.log(result);
            bool = result.data.meta['code'] === 200
            console.log('File called `test.txt` removed successfully \n')
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
            bool = result.data.meta['code'] === 200
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})
