describe('readFromHash',function() {
    it(": this case is to read a existing file from MoiBit using its hash",function(done) {
        var bool = false
        try {
            let streamReader = require('../src/utils/stream-reader')
            streamReader(this._testFileHashPath, async (err,content) => {
                if(err) return
                let result = await this._sdk.readFileByHash(content.toString())
                bool = result!== undefined
                expect(bool).toBe(true)
                done()
            })
        }   
        catch(e) {
            console.log(e)
        }
    })
})