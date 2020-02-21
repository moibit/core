describe('addFileFromFs',function() {
    it(": this case is to add a file to MoiBit from local fs",async function() {
        var bool = false
        try {
            if (typeof window !== 'undefined') {
                bool = true
            }
            else {
                this._sdk._util.writeToFile(this._testFilePath,'This file is for testing the addFileFromFs functionality in MoiBit SDK');
                
                let res = await this._sdk.addFileFromFs(this._testFilePath);

                /* creating temporary file that stores hash */
                const hasH = res.data.data['Hash'];
                this._sdk._util.writeToFile(this._testFileHashPath,hasH);
                bool = hasH !== undefined
            }
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})