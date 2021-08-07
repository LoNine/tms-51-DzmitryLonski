import './SearchForm.scss';

const SearchForm = (onClick) => {
  const container = document.createElement('div');
  container.classList.add('search-form');
  const input = document.createElement('input');
  input.classList.add('search-form__input');
  input.placeholder = 'Mr. Poopybutthole';
  const button = document.createElement('button');
  button.classList.add('search-form__button');

  button.innerText = 'SEARCH';
  button.addEventListener('click', () => {
    onClick(input.value);
  });

  container.append(input, button);
  return container;
};

export default SearchForm;
