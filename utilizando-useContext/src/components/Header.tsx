import { useContext } from "react"
import UserContext from "../context/userContext"

export default function Header() {
    const user = useContext(UserContext)

    return (
        <>
            <h3>Bem vindo, {user.name}!</h3>
            <hr />
        </>
    )
}