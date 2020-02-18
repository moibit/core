describe('addFileFromFs',function() {
    it(": this case is to add a file to MoiBit from local fs",async function() {
        var bool = false
        try {
            if (typeof window !== 'undefined') {
                bool = true
            }
            else {
                var fs = require('fs');
                var path = require('path');
                const sampleFilePath = path.join(process.cwd(),'/test.txt');

                let res = await this._sdk.addFileFromFs(sampleFilePath)

                /* creating temporary file that stores hash */
                const sampleCreatePath = path.join(process.cwd(),'/test_hash.txt')
                var writeStream = fs.createWriteStream(sampleCreatePath)
                const hasH = res.data.data['Hash'];
                writeStream.write(hasH)
                writeStream.end()


                console.log("File called `test.txt` added to MoiBit \n")
                bool = hasH !== undefined
            }
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})