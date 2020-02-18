describe('addFolderFromFs',function() {
    it(": this case is to add a folder to MoiBit from local fs",async function() {
        var bool = false
        try {
            if (typeof window !== 'undefined') {
                bool = true
            }
            else {
                var fs = require('fs');
                var path = require('path');

                /* creating temporary file that stores hash */
                const sampleFolderPath = path.join(process.cwd(),'/test_folder');
                // var writeStream = fs.createWriteStream(sampleFolderPath+'/testFolderFile.txt');
                // writeStream.write('This file is within folder to support testing the addFolder function in MoiBit SDK');
                // writeStream.end();
                /* creating temporary file that stores hash */



                let res = await this._sdk.addFolderFromFs(sampleFolderPath)
                console.log(res)
                /* creating temporary file that stores hash */
                // const sampleCreatePath = path.join(process.cwd(),'/test_folder_hash.txt')
                // var writeStream = fs.createWriteStream(sampleCreatePath)
                // const hasH = res.data.data['Hash'];
                // writeStream.write(hasH)
                // writeStream.end()


                // console.log("Folder called `test_folder` added to MoiBit \n")
                // bool = hasH !== undefined
            }
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})