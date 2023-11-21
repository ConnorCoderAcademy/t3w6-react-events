// Page that lets us increase or decrease 
// how many pokemon are on screen
// App component needs to:
// - Keep track of how many pokemon to show
// - iterate over a single, DRY modular component
// - Button to increase pokemon count
// - Button to decrease pokemon count
import React from "react";
import Pokemon from "./Pokemon";
class App extends React.Component {
  constructor() {
    super();

    // start with at least one pokemon on screen
    this.state = {
      pokemonCount : 1
    }
  }
  exampleFunction(){
    console.log("Hello world, from button click")
  }
  decreasePokemonCount(currentCount) {
      this.setState({pokemonCount: currentCount -1})
  }
  increasePokemonCount(currentCount) {
    this.setState({pokemonCount: currentCount +1})
}
  render(){
    return(
      <div>
        <h1>Pokemon page</h1>
        <button onClick={() => {this.decreasePokemonCount(this.state.pokemonCount)}}>Decrease Pokemon Count</button>
        <button onClick={() => {this.increasePokemonCount(this.state.pokemonCount)}}>Increase Pokemon Count</button>
        <Pokemon/>
      </div>
    )
  }
}



export default App;
