import { useState } from "react"
import btnStyles from "../styles/profile-btn.module.css"
import profileStyles from "../styles/profile-styles.module.css"
import ProfileSection from "./ProfileSection"

export default function Profile(props: {
    avatar: string, name: string, bio: string, email: string, phone: string,
    githubUrl: string, linkedinUrl: string, facebookUrl: string
}) {
    const [followText, setFollowText] = useState('Follow')

    function handleClick() {
        console.log(followText)
        if (followText === 'Follow') {
            setFollowText('Unfollow')
            return alert('deu bom papai!')
        }

        setFollowText('Follow')
        return alert('deu ruim papai!')
    }

    return (
        <>
            <div className={profileStyles.profileComponent}>
                <img src={props.avatar} alt="imagem de perfil" />
                <h3>
                    {props.name}
                    <button
                        onClick={handleClick}
                    >
                        {followText}
                    </button>
                </h3>
                <ProfileSection>{props.bio}</ProfileSection>
                <ProfileSection>{props.phone}</ProfileSection>
                <ProfileSection>{props.email}</ProfileSection>
                <ProfileSection>
                    <a href={props.githubUrl} target="_blank"><button className={btnStyles.profileBtn}>GitHub</button></a><br />
                    <a href={props.linkedinUrl} target="_blank"><button className={btnStyles.profileBtn}>LinkedIn</button></a><br />
                    <a href={props.facebookUrl} target="_blank"><button className={btnStyles.profileBtn}>Facebook</button></a>
                </ProfileSection>
            </div>
        </>
    )
} 