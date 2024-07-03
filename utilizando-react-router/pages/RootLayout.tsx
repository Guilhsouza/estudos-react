import { Outlet } from "react-router-dom"
import Header from "../components/Header"

export default function RootLayout() {
    return (
        <>
            <Header />
            <main>
                <p>Esse é o layout principal. abaixo vai estar o conteudo das rotas</p>
                <hr />
                <Outlet />
            </main>
            <hr />
            <footer>Feito com react-router-dom</footer>
        </>
    )
}