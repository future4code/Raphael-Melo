import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    pokeList: [],
    pokeImage: ""
  };

  componentDidMount = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        this.setState({ pokeList: response.data.results });
      })
      .catch(err => {
        console.log(err);
      });
  };

  pegaPokemon = event => {
    const pokeName = event.target.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        console.log(response.data.sprites.front_default);
        this.setState({ pokeImage: response.data.sprites.front_default });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <select onChange={this.pegaPokemon}>
          <option value={""}>Nenhum</option>
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {this.state.pokeImage && (
          <div>
            <img src={this.state.pokeImage} alt="pokemon" />
          </div>
        )}
      </div>
    );
  }
}

export default App;
