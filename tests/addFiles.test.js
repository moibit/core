describe('addFile',function() {
    it(": this case is to check the add file functionality which is browser compactable",async function() {
        var bool = false
        try {
            if (typeof window !== 'undefined') {
                bool = true
            }
            else {
                let res = await this._sdk.addFile(this._testFilePath)                
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

                /* preparing test_folder */
                fs.mkdir(this._testFolderPath,err => {
                    if(err) console.log(err)
                });
                this._sdk._util.writeToFile(this._testFolderPath+'/test-file1.txt','This is the second file in testFolder for testing addFolderFromFs functionality in MoiBit SDK');

                let res = await this._sdk.addFolder(this._testFolderPath)
                bool = res.Message !== undefined
            }
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})
