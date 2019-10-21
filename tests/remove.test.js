describe('removepin',function() {
    it(": this case is to unpin an existing file object with its hash for GC to collect", async function() {
        var bool = false
        try {
            let result = await this._sdk.unpin({
                filename : 'test.txt'
            })
            console.log('File called `test.txt` was pinned successfully \n')
            bool = result
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
    it(": this case is to unpin an non - existing file object with its hash", async function() {
        var bool = false
        try {
            await this._sdk.unpin({
                hash : 'zdj7WiHadfNTsHYjpHuscZfaQ6tvWRQZakRhT981RDY8vryVt'
            })
        }   
        catch(e) {
            console.log("Negative Case : Trying to unpin the file by hash which is not existing returns 404\n")
            bool = e.status === 404
        }
        expect(bool).toBe(true)
    })
})

describe('remove',function() {
    it(": this case is to remove the existing file",async function() {
        var bool = false
        try {
            let result = await this._sdk.remove('test.txt')
            console.log('File called `test.txt` removed successfully \n')
            bool = result
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
    it(": this case is remove the non-existing file",async function() {
        var bool = false
        try {
            await this._sdk.remove('test1.txt')
        }   
        catch(e) {
            console.log("Negative Case : Trying to remove the file called `test1.txt` which is not existing returns 404\n")
            bool = e.status === 404
        }
        expect(bool).toBe(true)
    })
})
