var axios = require('axios')
var isUrl = require('./utils/isUrl')
var isDef = require('./utils/isDef')


module.exports = class {
    /**
    * Create FileApiClient for sending requests
    * @constructor
    * @param {string} baseUrl - A string with the base url 
    * @param {Object} accessToken - An Object with api_key and api_secret
    */
    constructor(baseUrl,accessToken) {
        if (!isUrl(baseUrl)) 
            throw new Error({message:'The base URL provided is not valid'})

        this.baseUrl = baseUrl
        this.accessToken = accessToken
    }

    /**
     * sends the request from the API.
     * @param {*} method says get or post call
     * @param {*} url says which route going to call
     * @param {*} payload payload for the request
     * @param responseType indicates the type of data that the server will respond with
     * options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
     * browser only: 'blob'
        responseType: 'json', by default
     * @return {Promise} - Returns a Promise , when fulfilled, will either return an JSON Object with the requested
     * data or an Error with the reason.
     */
    send(method, url, payload = {},options={}) {
        let requiredResponseType;
        let requestedRoute = (this.baseUrl+'/'+url).trim()
        let authenticatedHeaders = {}

        authenticatedHeaders['api_key'] = this.accessToken.public || ''
        authenticatedHeaders['api_secret'] = this.accessToken.secret || ''

        if (method === 'POST') {
            authenticatedHeaders['Content-Type'] = 'application/json'
        } else if (Object.keys(payload).length && payload.constructor === Object) {
            let str = '?'
            let keys = Object.keys(payload)
            keys.map((key,index) => {
                str = str + key + '=' +payload[key]
                str = index+1 !== keys.length ? str + '&' : str
            })
            requestedRoute = requestedRoute + str
        }
        if(!isDef(options.responseType)) {
            requiredResponseType = 'json'
        }
        if(isDef(options.injectFormHeaders)) {
            if(options.injectFormHeaders) {
                authenticatedHeaders = {
                    ...payload.getHeaders(),
                    ...authenticatedHeaders
                }
            }
        }
        return axios({
            url : requestedRoute, 
            method : method,
            data: payload,
            headers : authenticatedHeaders,
            responseType : requiredResponseType
        })
        .then((response) => {
            return Promise.resolve(response)
        })
        .catch(e => {
            if(isDef(e.response)) {
                return Promise.reject({
                    status: e.response.status || '',
                    message: e.response.statusText || '',
                    body: e.response.data || ''
                })
            }
            else {
                return Promise.reject(e)
            }
        })
    }
}