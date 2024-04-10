import Title from "./components/Title.tsx"
import { PowerCalculator } from "./components/PowerCalculator.tsx"

export default function App() {

  return (
    <div
      style={{
        backgroundColor: "#333333",
        display: "grid",
        textAlign: "center",
        alignContent: "center",
        color: "white",
        minHeight: "100vh"
      }}
    >
      <Title />
      <PowerCalculator />
    </div>
  )
}