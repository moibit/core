describe('addFromFs',function() {
    it(": this case is to add a file to MoiBit which is browser compactable",async function() {
        var bool = false
        try {
            if (typeof window !== 'undefined') {
                bool = true
            }
            else {
                var fs = require('fs');
                var path = require('path');
                const sampleFilePath = path.join(process.cwd(),'/test.txt');

                let res = await this._sdk.addFromFs(sampleFilePath)

                /* creating temporary file that stores hash */
                const sampleCreatePath = path.join(process.cwd(),'/test_hash.txt')
                var writeStream = fs.createWriteStream(sampleCreatePath)
                writeStream.write(res['Hash'])
                writeStream.end()


                console.log("File called `test.txt` added to MoiBit \n")
                bool = res['Hash'] !== undefined
            }
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})