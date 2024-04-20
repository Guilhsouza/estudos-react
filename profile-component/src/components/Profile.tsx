import btnStyles from "../styles/profile-btn.module.css"
import profileStyles from "../styles/profile-styles.module.css"

export default function Profile() {
    return (
        <>
            <div className={profileStyles.profileComponent}>
                <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2024/02/zoro_one_piece__122h6r.jpg" alt="" />
                <hr />
                <h3 className="name">Guilherme Souza</h3>
                <hr />
                <p className="stack">Fullstack Javascript Developer</p>
                <hr />
                <p className="phone">12991112772</p>
                <hr />
                <p className="email">gui.edu0380@gmail.com</p>
                <hr />
                <button className={btnStyles.profileBtn}>github</button><br />
                <button className={btnStyles.profileBtn}>github</button><br />
                <button className={btnStyles.profileBtn}>github</button>
            </div>
        </>
    )
} 