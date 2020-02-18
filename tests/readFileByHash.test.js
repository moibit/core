describe('readFromHash',function() {
    it(": this case is to read a existing file from MoiBit using its hash",function(done) {
        var bool = false
        try {
            var path = require('path')
            const sampleFilePath = path.join(process.cwd(),'/test_hash.txt')
            let streamReader = require('../src/utils/stream-reader')
            streamReader(sampleFilePath, async (err,content) => {
                if(err) return
                let result = await this._sdk.readFileByHash(content.toString())
                console.log("/***** Content of file having hash : "+content.toString()+" ******/\n")
                console.log(result.data)
                console.log("/***** end of content ******/\n")
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