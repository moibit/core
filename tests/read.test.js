describe('read',function() {
    it(": this case is to read a existing file from MoiBit using its name",async function() {
        var bool = false
        try {
            let result = await this._sdk.read('/test.txt')
            bool = result!== undefined
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
    it(": this case is to read a non - existing file from MoiBit using its name",async function() {
        var bool = false
        try {
            let result = await this._sdk.read('/test1.txt');
            console.log("Negative Case : Trying to read the file called `test1.txt` which is not existing returns 404\n")
            bool = result.body.meta['code'] === 404
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})
