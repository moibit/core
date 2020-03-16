describe('addFolderFromFs',function() {
    it(": this case is to add a folder to MoiBit from local fs",async function() {
        var bool = false
        try {
            if (typeof window !== 'undefined') {
                bool = true
            }
            else {
                let res = await this._sdk.addFolderFromFs(this._testFolderPath)
                bool = res.data.data['Hash'] !== undefined
            }
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})