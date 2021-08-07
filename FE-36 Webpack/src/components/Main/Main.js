import Header from '../Header/Header';
import SearchForm from '../SearchForm/SearchForm';
import CharacterList from '../CharactersList/CharacterList';
import ShowMessage from '../ShowMessage/ShowMessage';
import Loader from '../Loader/Loader';
import './Main.scss';

const Main = (api) => {
  const container = document.createElement('div');
  const charactersContainer = document.createElement('div');
  const loader = Loader();
  const handlerOnClick = async (search) => {
    charactersContainer.innerHTML = '';
    charactersContainer.append(loader);
    const charactersInfo = await api.find(search);
    charactersContainer.innerHTML = '';
    if (charactersInfo.length === 0) {
      const showMessage = ShowMessage(`Sorry, can't find any characters with "${search}" name :(`);
      charactersContainer.append(showMessage);
      return;
    }
    const characterList = CharacterList(charactersInfo);
    charactersContainer.append(characterList);
  };
  const header = Header();
  const searchForm = SearchForm(handlerOnClick);
  container.append(header, searchForm, charactersContainer);
  return container;
};

export default Main;
