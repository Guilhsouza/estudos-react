import styles from '../../styles/card.module.css'

export default function Card(props: { title: string, image: string }) {

    return (
        <div className={styles.card}>
            <img className={styles.img} src={props.image} alt="Fotinha das abelhas" />
            <div>
                <h1 className={styles.tittle}>{props.title}</h1>
                <p className={styles.description}>As abelhas desempenham um papel crucial na polinização de plantas, contribuindo para a reprodução de uma grande
                    variedade de culturas alimentares. Sem elas, muitas plantas não poderiam produzir frutos e sementes, impactando
                    diretamente a produção de alimentos. Além disso, as abelhas são essenciais para a manutenção da biodiversidade e
                    funcionamento dos ecossistemas. Seu trabalho incansável como polinizadoras também apoia a produção de mel, cera e
                    outros produtos apícolas. Preservar as populações de abelhas é vital para a segurança alimentar global e a saúde dos
                    ecossistemas.</p>
                <a href="https://www.acaatinga.org.br/voce-sabe-qual-a-importancia-das-abelhas/" target='_blank'><button className={styles.btn}>Saiba mais!</button></a>
            </div>
        </div>
    )
}