interface comentData {
    email: string
    coment: string
}

export default function RenderList(comentData: comentData) {
    const time = new Date
    const dataTimeFormated = `Comentário feito em ${time.getDate()}/${time.getMonth() + 1}/${time.getFullYear()}`

    return (
        <div className='coment'>
            <h4>{comentData.email}</h4>
            <p>{dataTimeFormated}</p>
            <p>{comentData.coment}</p>
        </div>
    )
}