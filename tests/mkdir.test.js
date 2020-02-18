describe('fileStats',function() {
    it(": this case is to create empty folder in moibit",async function() {
        var bool = false
        try {
            let result = await this._sdk.mkdir('/myAwesomeDirectory')
            bool = result.data.meta['code'] === 200
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
    it(": this case is to create hierarchy of folders",async function() {
        var bool = false
        try {
            let result = await this._sdk.mkdir('/node_modules/moibit')
            bool = result.data.meta['code'] === 200
        }   
        catch(e) {
            console.log(e);
        }
        expect(bool).toBe(true)
    })
})
