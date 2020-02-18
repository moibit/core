describe('fileStats',function() {
    it(": this case is to detail about a existing file with its name",async function() {
        var bool = false
        try {
            let result = await this._sdk.fileStats('/test.txt')
            bool = result.data.meta['code'] === 200
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
    it(": this case is to detail about a non-existing file with its name",async function() {
        var bool = false
        try {
            let result = await this._sdk.fileStats('/README2.md')
            console.log("Negative Case : Trying to get detail of the file called `README2.md` which is not existing returns 404\n")
            bool = result.body.meta['code'] === 404
        }   
        catch(e) {
            console.log(e);
        }
        expect(bool).toBe(true)
    })
})
