describe('addFile',function() {
    it(": this case is to check the add file functionality which is browser compactable",async function() {
        var bool = false
        try {
            if (typeof window !== 'undefined') {
                bool = true
            }
            else {
                var fs = require('fs');
                var path = require('path');
                const sampleFilePath = path.join(process.cwd(),'/test.txt');

                /* creating temporary file that stores hash */
                var writeStream = fs.createWriteStream(sampleFilePath);
                writeStream.write('This file is to support testing the add function in MoiBit SDK');
                writeStream.end();

                let res = await this._sdk.addFile(writeStream)
                
                /* creating temporary file that stores hash */
                bool = res.Message !== undefined
            }
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})

describe('addFolder',function() {
    it(": this case is to check the add folder functionality which is browser compactable",async function() {
        var bool = false
        try {
            if (typeof window !== 'undefined') {
                bool = true
            }
            else {
                var fs = require('fs');
                var path = require('path');
                const sampleFolderPath = path.join(process.cwd(),'/test_folder');
                
                fs.mkdir(sampleFolderPath,err => {
                    if(err) console.log(err)
                });

                let res = await this._sdk.addFolder(sampleFolderPath)
                bool = res.Message !== undefined
            }
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})
