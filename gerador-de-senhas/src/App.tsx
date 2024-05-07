import { useState } from 'react'
import styles from './styles/generate.module.css'
import Input from './components/Input'

export default function App() {
  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  const [customSize, setCustomSize] = useState(12)
  const [showInput, setShowInput] = useState(0)

  const passwordSize: number = showInput ? customSize : 12

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyText('Copiar')
  }

  function copyPassword() {
    navigator.clipboard.writeText(password);
    setCopyText('Copiado!')
  }

  return (
    <div className='app'>
      <div className={styles.container}>
        <h1 className={styles.title}>Gerador de Senhas</h1>
        <div>
          <label htmlFor="showInput">Customizar tamanho:</label>
          <input
            type="checkbox"
            id='showInput'
            value={showInput}
            onChange={() => setShowInput((currentValue) => {
              if (currentValue === 0) {
                return 1
              }

              return 0
            })}
          />
        </div>

        {showInput ? (
          <div>
            <label htmlFor='passwordSize'>Tamanho da senha: </label>
            <Input passwordSize={customSize} setPasswordSize={setCustomSize} />
          </div>
        ) : null
        }

        <button className={`${styles.button} ${styles.buttonSpace}`} onClick={generate}>Gerar Senha</button>
        <button className={styles.button} onClick={copyPassword}>{copyText}</button>
        <div className={styles.pswrd}>{password}</div>
      </div>
    </div>
  )
}

