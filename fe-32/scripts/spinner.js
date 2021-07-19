class Spinner {
  element = document.getElementById('loader');
    draw() {
        this.element.classList.add('loader');
    }
    remove() {
        this.element.classList.remove('loader');
    }
}

module.exports = Spinner