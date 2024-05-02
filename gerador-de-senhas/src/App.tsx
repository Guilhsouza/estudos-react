import React, { useState } from 'react'
import styles from './styles/generate.module.css'

export default function App() {
  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState('Copiar')
  const [passwordSize, setPasswordSize] = useState(12)

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length)
      newPassword += characters[position]
      console.log(position)
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
          <label htmlFor='passwordSize'>Tamanho da senha: </label>
          <input
            type='number'
            id='passwordSize'
            min={1}
            value={passwordSize}
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setPasswordSize(parseInt(ev.target.value))}
          />
        </div>
        <button className={`${styles.button} ${styles.buttonSpace}`} onClick={generate}>Gerar</button>
        <button className={styles.button} onClick={copyPassword}>{copyText}</button>
        <div className={styles.pswrd}>{password}</div>
      </div>
    </div>
  )
}

