const getCatInfo = require('./requests');
const Spinner = require('./spinner');

class Cat {
  draw() {
    const mainElement = document.getElementById('main');
    mainElement.innerHTML = '';

    const spinner = new Spinner();
    spinner.draw();

    getCatInfo().then((result) => {
      const imageElement = document.createElement('img');
      imageElement.src = result.data[0].url;
      imageElement.classList.add('image');

      mainElement.append(imageElement);
      mainElement.addEventListener('click', this.draw);

      spinner.remove();
    })
      .catch((error) => {
        mainElement.append(error);
        spinner.remove();
      });
  }
}

module.exports = Cat;
