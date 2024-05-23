import styles from '../styles/comentsSectionStyles.module.css'

export default function ComentsSection() {
    return (
        <div className={styles.comentsContainer}>
            <h2>Seção de Comentários</h2>
            <form action="">
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div>
                    <label htmlFor="coments">Comentário</label>
                    <textarea id="coments" name="coments" rows={5} cols={40} />
                </div>
                <button >Enviar Comentário</button>
            </form>
            <hr />
        </div>
    )
} 