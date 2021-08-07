import './Character.scss';

const Character = (character) => {
  const container = document.createElement('div');
  container.classList.add('character');
  const name = document.createElement('div');
  name.classList.add('character__name');
  const image = document.createElement('img');
  image.classList.add('character__image');

  name.innerText = character.name;
  image.src = character.image;

  container.append(image, name);
  return container;
};

export default Character;
