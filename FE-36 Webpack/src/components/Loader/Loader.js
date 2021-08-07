import LoaderImage from './Loader.png';
import './Loader.scss';

const Loader = () => {
  const container = document.createElement('div');
  const img = document.createElement('img');
  img.classList.add('loader');
  img.src = LoaderImage;

  container.append(img);
  return container;
};

export default Loader;
