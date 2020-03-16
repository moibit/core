
describe('getVersions',function() {
    it(": this case is to get all versions of an existing file from fileName", async function() {
        var bool = false
        try {
            let result = await this._sdk.getVersions('/test.txt')
            bool = result.data.meta['code'] === 200
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})

describe('getVersions',function() {
    it(": this case is to get all versions of an non-existing file from fileName", async function() {
        var bool = false
        try {
            let result = await this._sdk.getVersions('/README2.md')
            console.log("Negative Case : Trying to get detail of the file called `README2.md` which is not existing returns 404\n")
            bool = result.body.meta['code'] === 404
        }   
        catch(e) {
            console.log(e);
        }
        expect(bool).toBe(true)
    })
})