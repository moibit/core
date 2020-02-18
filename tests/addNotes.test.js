describe('addNotes',function() {
    it(": this case is to append a notes to existing file in MoiBit",async function() {
        var bool = true
        try {
            let res = await this._sdk.addNotes('\n\n appending a super text using addNotes','/test.txt')
            bool = res.data.data['Hash'] !== undefined
            console.log("Text appended to `test.txt` file in MoiBit \n")
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})
describe('addNotes',function() {
    it(": this case is to add a notes in new file in MoiBit",async function() {
        var bool = false
        try {
            let res = await this._sdk.addNotes('appending a text using addNotes','/newText.txt',{create:true})
            bool = res.data.data['Hash'] !== undefined
            console.log("Created new notes in `newText.txt` file in MoiBit \n")
        }   
        catch(e) {
            console.log(e)
        }
        expect(bool).toBe(true)
    })
})