import React, { useState } from 'react'
import styles from '../styles/comentsSectionStyles.module.css'
import TextInput from './TextInput'

interface addComentFunc {
    addComent: (email: string, coment: string) => void;
}

export default function ComentsSection({ addComent }: addComentFunc) {
    const [email, setEmail] = useState('')
    const [coment, setComent] = useState('')

    const handleSubmit = (ev: React.FormEvent) => {
        ev.preventDefault()

        addComent(email, coment)

        setEmail('')
        setComent('')
    }

    return (
        <div className={styles.comentsContainer}>
            <h2>Seção de Comentários</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextInput label='Email: ' tag='input' id='email' name='email' type='email' value={email} setValue={setEmail} />
                </div>
                <div>
                    <TextInput label='Comentário: ' tag='textarea' id='coment' name='coment' rows={6} cols={40} value={coment} setValue={setComent} />
                </div>
                <button type='submit'>Enviar Comentário</button>
            </form>
            <hr />

        </div>
    )
} 