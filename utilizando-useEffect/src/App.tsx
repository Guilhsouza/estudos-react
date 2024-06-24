import { useEffect, useState } from "react"

function Counter() {
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    console.log("o efeito colateral foi ativado");

    return () => {
      console.log('limpando...');
      console.log('componente desmontado');
    }

  }, [])

  return (
    <button onClick={() => setCounter(count => count + 1)}>
      Contador = {counter}
    </button>
  )
}

export default function App() {
  const [show, setShow] = useState<number>(0)

  const handleChange = () => {
    setShow(state => state === 0 ? 1 : 0)
  }

  return (
    <>
      <h1>Conhecendo Use Effect</h1>
      <div>
        <input type="checkbox"
          id="exibir"
          value={show}
          onChange={handleChange}
        />
        <label htmlFor="exibir">Exibir</label>
      </div>
      {
        show ? <Counter /> : null
      }
      <hr />
    </>
  )
}