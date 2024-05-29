import React, { useState } from 'react'
import styles from '../styles/comentsSectionStyles.module.css'
import useComentsCollection from '../hooks/useComentsCollection'
import TextInput from './TextInput'

export default function ComentsSection() {
    const { comentsList, addComent } = useComentsCollection()

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
                    <TextInput label='Email: ' id='email' name='email' type='email' value={email} setValue={setEmail} />
                </div>
                <div>
                    <TextInput label='Comentário: ' id='coment' name='coment' type='text' value={coment} setValue={setComent} />
                </div>
                <button type='submit'>Enviar Comentário</button>
            </form>
            <hr />

        </div>
    )
} 