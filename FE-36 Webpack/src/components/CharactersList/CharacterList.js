import Character from './Character/Character';
import './CharacterList.scss';

const CharacterList = (charactersInfo) => {
  const container = document.createElement('div');
  container.classList.add('characters-list');

  const characterList = charactersInfo.map((hero) => Character(hero));

  container.append(...characterList);
  return container;
};

export default CharacterList;
