describe('filedetail',function() {
    it(": this case is to detail about a existing file with its name",async function() {
        var bool = false
        try {
            let result = await this._sdk.filedetail('test.txt')
            console.log('Complete File Detail : \n')
            console.log(result)
            bool = result!== undefined
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
    it(": this case is to detail about a non-existing file with its name",async function() {
        var bool = false
        try {
            await this._sdk.filedetail('README2.md')
        }   
        catch(e) {
            console.log("Negative Case : Trying to get detail of the file called `README2.md` which is not existing returns 404\n")
            bool = e.status === 404
        }
        expect(bool).toBe(true)
    })
})
