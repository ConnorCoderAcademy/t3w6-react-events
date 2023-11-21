import React from "react"

class Pokemon extends React.Component{
    constructor() {
        super();
        this.state = {
            pokemonData: {
                name: ""
            }
        }

    }
    render() {
        return this.state.pokemonData.name ? 
        (
            <div>
                <h1>Pokemon Data Found!</h1>
            </div>
        )
        :
        (
            <div>
                <h1>Still loading Pokeon data...</h1>
            </div>
        )
    }

}

export default Pokemon;