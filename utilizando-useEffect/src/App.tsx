type pokemonReturn = { name: string, url: string }
type pokemonStats = {
  name: string,
  sprites: { front_default: string },
  types: [],
  height: number,
  weight: number,
  base_stat: number,
  stats: [{ base_stat: string, stat: { name: string } }],
  abilities: [{ is_hidden: string, ability: { name: string } }],

}

import { useState } from "react"

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")

  const data = await response.json()

  return data.results
}

export default function App() {
  const [pokemons, setPokemons] = useState([])
  const [pokemonShown, setPokemonShown] = useState<pokemonStats | null>(null)

  if (pokemons.length === 0) {
    fetchPokemon().then((results) => {
      console.log(results);
      setPokemons(results)
    })
  }

  const showDetails = async (url: string) => {
    const data = await fetch(url).then(res => res.json())
    setPokemonShown(data)
  }

  return (
    <div className="app">
      <div>
        <h2>Pokemons</h2>
        <ul className="pokemon">
          {pokemons.map((pokemon: pokemonReturn) => (
            <li key={pokemon.name}>
              <span>{pokemon.name}</span>
              <button onClick={() => showDetails(pokemon.url)}>
                Ver detalhes
              </button>
            </li>
          ))}
        </ul>
      </div>

      {
        pokemonShown && (
          <div className="pokemonDetails">
            <h2>{pokemonShown.name}</h2>
            <img
              src={pokemonShown.sprites.front_default}
              alt=""
            />
            <div className="stat">
              <b>Tipo: </b>
              {pokemonShown.types.map((type: { name: string }) => (
                <span key={type.name}>{type.name} </span>
              ))}
            </div>
            <div className="stat">
              <b>Altura: </b>{pokemonShown.height / 10} m
            </div>
            <div className="stat">
              <b>Peso: </b>{pokemonShown.weight / 10} Kg
            </div>
            <div className="stat">
              <b>Atributos</b>
              <ul>
                {pokemonShown.stats.map(({ base_stat, stat }) => (
                  <li key={stat.name}>
                    {stat.name}: {base_stat}
                  </li>
                ))}
              </ul>
            </div>
            <div className="stat">
              <b>Habilidades</b>
              <ul>
                {pokemonShown.abilities.map(({ ability, is_hidden }) => (
                  <li key={ability.name}>
                    {ability.name}
                    {is_hidden && " (secreta)"}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )
      }
    </div >
  )
}