import ProfileBtn from "./Profile-btn"

export default function Profile() {
    return (
        <>
            <div className='profile-component'>
                <img src="https://uploads.jovemnerd.com.br/wp-content/uploads/2024/02/zoro_one_piece__122h6r.jpg" alt="" />
                <hr />
                <h3 className="name">Guilherme Souza</h3>
                <hr />
                <p className="phone">12991112772</p>
                <hr />
                <p className="email">gui.edu0380@gmail.com</p>
                <hr />
                <a href="">{ProfileBtn('github')}</a><br />
                <a href="">{ProfileBtn('linkedin')}</a><br />
                <a href="">{ProfileBtn('discord')}</a><br />
            </div>
        </>
    )
} 