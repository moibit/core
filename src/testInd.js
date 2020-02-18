// var path = require('path');
const MoiBitSdk = require('./sdk');
var creds = require('../creds-export.test.js')
const m = new MoiBitSdk(creds.baseUrl,{
    public : creds.public,
    secret : creds.secret
})
// const sampleFilePath = path.join(process.cwd(),'/anotherOneBro13.txt')
m.addNotes('appending new textttt','/addNotesFromSdk.txt',{create : false}).then(console.log).catch(console.log)