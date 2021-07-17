const Request = require('./requests.js')
const Spinner = require('./spinner')

class Cat {
    draw() {
        let mainElement = document.getElementById('main');
        mainElement.innerHTML = '';

        let spinner = new Spinner()
        spinner.draw()

        let promise = new Promise(resolve => {
            let request = new Request()
            resolve(request.getCat())
        })

        promise.then(result => {

        let imageElement = document.createElement('img');
        imageElement.src = result[0].url
        imageElement.classList.add('image')

        mainElement.append(imageElement);
        mainElement.addEventListener('click', this.draw);

        spinner.remove()
        })
    }
}

module.exports = Cat