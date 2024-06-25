import { useEffect, useState } from "react"

async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")

  const data = await response.json()

  return data.results
}

export default function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    fetchPokemon().then((results) => {
      console.log("Requisição finalizada.");
      console.log(results);
      setPokemons(results)
    })
  }, [])

  return (
    <>
      <div>
        <h2>Pokemons</h2>
        {JSON.stringify(pokemons)}
        <hr />
      </div>
    </>
  )
}