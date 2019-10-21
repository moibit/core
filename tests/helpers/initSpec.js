var MoiBitSdk = require('../../src/sdk')
var creds = require('../../creds-export.test.js')
beforeEach(function() {
    this._sdk = new MoiBitSdk(creds.baseUrl,{
        public : creds.public,
        secret : creds.secret
    })
})
