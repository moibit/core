
describe('addpin',function() {
    it(": this case is to pin an existing file object with its hash", async function(done) {
        var bool = false
        try {
            var path = require('path')
            const sampleFilePath = path.join(process.cwd(),'/test_hash.txt')
            let streamReader = require('../src/utils/stream-reader')
            streamReader(sampleFilePath, async (err,content) => {
                if(err) return
                let result = await this._sdk.pin({
                    hash : content.toString()
                })
                bool = result
                console.log("Added pin to `"+content.toString()+"`\n")
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
            await this._sdk.pin({
                filename : 'README2.md'
            })
        }   
        catch(e) {
            console.log("Negative Case : Trying to pin the file called `README2.md` which is not existing returns 404\n")
            bool = e.status === 404
        }
        expect(bool).toBe(true)
    })
})