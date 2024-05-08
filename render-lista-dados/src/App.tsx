import { games } from '../utils/gameList.tsx'

export default function App() {
  return (
    <div id="app">
      <h1>Meus jogos</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
        {games.map(
          (game) => {
            return (
              <div key={game.id}>
                <img src={game.coverImage} alt="gameCoverImage" />
                <h2>{game.title}</h2>
                <p>{game.description}</p>

              </div>
            )
          }
        )}
      </div>
    </div>
  )
}