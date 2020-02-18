describe('removepin',function() {
    it(": this case is to unpin an existing file with its hash for GC to collect", async function() {
        var bool = false
        try {
            let result = await this._sdk.removePin({
                fileName : '/test.txt'
            })
            bool = result.data.meta['code'] === 200
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})