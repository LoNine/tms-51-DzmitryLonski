import './Header.scss';

const Header = () => {
  const container = document.createElement('div');
  container.classList.add('header');
  const title = document.createElement('h1');
  title.innerText = 'Rick And Morty Character Search';
  title.classList.add('header__title');
  container.append(title);
  return container;
};

export default Header;
