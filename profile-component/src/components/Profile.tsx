import btnStyles from "../styles/profile-btn.module.css"
import profileStyles from "../styles/profile-styles.module.css"

export default function Profile(props: {
    avatar: string, name: string, bio: string, email: string, phone: string,
    githubUrl: string, linkedinUrl: string, facebookUrl: string
}) {
    return (
        <>
            <div className={profileStyles.profileComponent}>
                <img src={props.avatar} alt="imagem de perfil" />
                <h3 className="name">{props.name}</h3>
                <hr />
                <p className="stack">{props.bio}</p>
                <hr />
                <p className="phone">{props.phone}</p>
                <hr />
                <p className="email">{props.email}</p>
                <hr />
                <a href={props.githubUrl} target="_blank"><button className={btnStyles.profileBtn}>GitHub</button></a><br />
                <a href={props.linkedinUrl} target="_blank"><button className={btnStyles.profileBtn}>LinkedIn</button></a><br />
                <a href={props.facebookUrl} target="_blank"><button className={btnStyles.profileBtn}>Facebook</button></a>
            </div>
        </>
    )
} 