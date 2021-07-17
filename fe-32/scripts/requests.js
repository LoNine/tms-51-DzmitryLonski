let url = new URL('https://api.thecatapi.com/v1/images/search')
class Request {
    getCat() {
        return fetch(url)
        .then(response => response.json())
        .catch(err => err)
    }
}

module.exports = Request