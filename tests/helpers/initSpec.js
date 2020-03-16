var MoiBitSdk = require('../../src/index');
var creds = require('../../creds-export.test.js');
var path = require('path');

beforeEach(function() {

    /* MoiBit SDK initialization */
    this._sdk = new MoiBitSdk(creds.baseUrl,{
        public : creds.public,
        secret : creds.secret
    })

    /* paths of testfiles */ 
    this._testFilePath = path.join(process.cwd(),'/test.txt');
    this._testFolderPath = path.join(process.cwd(),'/test_folder');
    this._testFileHashPath = path.join(process.cwd(),'/test_hash.txt')
})
