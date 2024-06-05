import { useRef, useState } from "react"
import RefExample from "./RefExample"

export default function App() {
  let variable = 0
  const [state, setState] = useState(0)
  const ref = useRef(0)

  const showValue = () => {
    alert(`
      variavel: ${variable}
      Ref: ${ref.current}
      state: ${state}
    `)
  }

  return (
    <>
      <h2>focar no input</h2>
      <RefExample />
      <hr />
      <h2>Utilizando useRef()</h2>
      <hr />
      <p>Váriavel: {variable}</p>
      <p>Ref: {ref.current}</p>
      <p>State: {state}</p>

      <button onClick={() => variable++}> Aumentar váriavel</button >
      <button onClick={() => ref.current++}>Aumentar Ref</button>
      <button onClick={() => setState((state + 1))}>Aumentar State</button>
      <hr />
      <button
        onClick={showValue}
      >Exibir valores</button>
    </>
  )
}