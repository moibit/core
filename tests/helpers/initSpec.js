var MoiBitSdk = require('../../src/index')
var creds = require('../../creds-export.test.js')
beforeEach(function() {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    this._sdk = new MoiBitSdk(creds.baseUrl,{
        public : creds.public,
        secret : creds.secret
    })
})
