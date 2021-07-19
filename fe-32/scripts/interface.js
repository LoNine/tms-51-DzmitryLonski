const Request = require("./requests.js");
const Spinner = require("./spinner");

class Cat {
  draw() {
    let mainElement = document.getElementById("main");
    mainElement.innerHTML = "";

    let spinner = new Spinner();
    spinner.draw();

    let request = new Request();
    request.getCat().then((result) => {
      let imageElement = document.createElement("img");
      imageElement.src = result.data[0].url;
      imageElement.classList.add("image");

      mainElement.append(imageElement);
      mainElement.addEventListener("click", this.draw);

      spinner.remove();
    })
    .catch(error => {
        mainElement.append(error)
        spinner.remove()
    })
  }
}

module.exports = Cat;