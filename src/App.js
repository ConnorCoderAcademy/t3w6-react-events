// Page that lets us increase or decrease 
// how many pokemon are on screen
// App component needs to:
// - Keep track of how many pokemon to show
// - iterate over a single, DRY modular component
// - Button to increase pokemon count
// - Button to decrease pokemon count
import React from "react";

class App extends React.Component {
  constructor() {
    super();

    // start with at least one pokemon on screen
    this.state = {
      pokemonCount : 1
    }
  }
  render(){
    return(
      <div>
        <h1>Pokemon page</h1>
      </div>
    )
  }
}

export default App;
