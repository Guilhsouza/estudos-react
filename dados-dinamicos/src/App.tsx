import Title from "./components/Title.tsx"
import { PowerCalculator } from "./components/PowerCalculator.tsx"
import styles from "./styles/App.module.css"

export default function App() {

  return (
    <div
      className={styles.app}
    >
      <Title />
      <PowerCalculator />
    </div>
  )
}