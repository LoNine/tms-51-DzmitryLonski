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