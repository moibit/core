describe('list',function() {
    it(": this case is to list all the files from root",async function() {
        var bool = false
        try {
            let result = await this._sdk.list()
            console.log('List of files under root : \n')
            console.log(result)
            bool = result!== undefined
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
    it(": this case is to list all the files from folder which is not there",async function() {
        var bool = false
        try {
            await this._sdk.list('fakeroot/fakefolder')
        }   
        catch(e) {
            console.log("Negative Case : Trying to list the files from `fakepath/fakefolder` which is not existing returns 404\n")
            bool = e.status === 404            
        }
        expect(bool).toBe(true)
    })
})
