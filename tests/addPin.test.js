
describe('addpin',function() {
    it(": this case is to pin an existing file object with its hash", async function(done) {
        var bool = false
        try {
            let streamReader = require('../src/utils/stream-reader')
            streamReader(this._testFileHashPath, async (err,content) => {
                if(err) return
                let result = await this._sdk.addPin({
                    hash : content.toString()
                })
                bool = result.data.meta['code'] === 200
                expect(bool).toBe(true)
                done()
            })
        }   
        catch(e) {
            console.log(e)
        }
    })
})

describe('addpin',function() {
    it(": this case is to pin an non - existing file object with its filename", async function() {
        var bool = false
        try {
            let result = await this._sdk.addPin({
                fileName : '/README2.md'
            })
            bool = result.body.meta['code'] === 404
            console.log("Negative Case : Trying to pin the file called `README2.md` which is not existing returns 404\n")
        }   
        catch(e) {
            console.log(e);
        }
        expect(bool).toBe(true)
    })
})