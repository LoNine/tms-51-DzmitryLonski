const axios = require('axios')

let url = new URL('https://api.thecatapi.com/v1/images/search')
class Request {
    getCat() {
        return axios.get(url)
    }
}

module.exports = Request