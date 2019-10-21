const dotenv = require('dotenv')
dotenv.config()
module.exports = {
    baseUrl : process.env.baseUrl,
    public : process.env.public,
    secret : process.env.secret
}