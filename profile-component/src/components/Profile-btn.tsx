import styles from '../styles/profile-btn.module.css'

export default function ProfileBtn(btnContent: string) {
    return (
        <button className={styles.profileBtn}>{btnContent}</button>
    )
}