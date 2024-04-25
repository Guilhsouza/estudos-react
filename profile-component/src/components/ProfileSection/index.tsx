import styles from './style.module.css'

export default function ProfileSection(props: { children: React.ReactNode }) {
    return (
        <div
            className={styles.wrapper}
        >
            {props.children}
        </div>
    )
}