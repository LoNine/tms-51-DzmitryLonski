(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const Cat = require('./interface.js')
let cat = new Cat()
cat.draw()
},{"./interface.js":2}],2:[function(require,module,exports){
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
},{"./requests.js":3,"./spinner":4}],3:[function(require,module,exports){
let url = new URL('https://api.thecatapi.com/v1/images/search')
class Request {
    getCat() {
        return fetch(url)
        .then(response => response.json())
        .catch(err => err)
    }
}

module.exports = Request
},{}],4:[function(require,module,exports){
class Spinner {
    draw() {
        let spinnerElement = document.getElementById('loader');
        spinnerElement.classList.add('loader');
    }
    remove() {
        let spinnerElement = document.getElementById('loader');
        spinnerElement.classList.remove('loader');
    }
}

module.exports = Spinner
},{}]},{},[1]);
