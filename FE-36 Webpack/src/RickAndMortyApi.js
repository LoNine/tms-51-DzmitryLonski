export default class RickAndMortyApi {
  async find(query) {
    this.responce = await fetch(`https://rickandmortyapi.com/api/character?name=${query}`);
    this.result = await this.responce.json();

    return this.result.results
      ? this.result.results.map((character) => {
        const characterInfo = { name: character.name, image: character.image };
        return characterInfo;
      })
      : [];
  }
}
