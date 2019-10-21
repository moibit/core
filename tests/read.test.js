describe('read',function() {
    it(": this case is to read a existing file from KFS using its name",async function() {
        var bool = false
        try {
            let result = await this._sdk.read('test.txt')
            console.log("Content of file having name : test.txt : \n")
            console.log(result)
            console.log('\n')
            bool = result!== undefined
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
    it(": this case is to read a non - existing file from KFS using its name",async function() {
        var bool = false
        try {
            await this._sdk.read('test1.txt')
        }   
        catch(e) {
            console.log("Negative Case : Trying to read the file called `test1.txt` which is not existing returns 404\n")
            bool = e.status === 404
        }
        expect(bool).toBe(true)
    })
})


describe('readFromHash',function() {
    it(": this case is to read a existing file from KFS using its hash",function(done) {
        var bool = false
        try {
            var path = require('path')
            const sampleFilePath = path.join(process.cwd(),'/test_hash.txt')
            let streamReader = require('../src/utils/stream-reader')
            streamReader(sampleFilePath, async (err,content) => {
                if(err) return
                let result = await this._sdk.readFromHash(content.toString())
                console.log("Content of file having hash : "+content.toString()+"\n")
                console.log(result)
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
