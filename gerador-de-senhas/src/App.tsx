import { useState } from 'react'
import styles from './styles/generate.module.css'

export default function App() {
  const [password, setPassword] = useState('')
  const [copyText, setCopyText] = useState('Copiar')

  function generate() {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    const length = 12
    let newPassword = ""
    for (let i = 0; i < length; i++) {
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
        <button className={`${styles.button} ${styles.buttonSpace}`} onClick={generate}>Gerar</button>
        <button className={styles.button} onClick={copyPassword}>{copyText}</button>
        <div className={styles.pswrd}>{password}</div>
      </div>
    </div>
  )
}

