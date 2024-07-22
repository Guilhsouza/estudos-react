import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
    return (
        <Navbar container="md" color="dark" dark>
            <Link href="/" className="navbar-brand" passHref>
                Início
            </Link>
            <Nav className="flex-row" navbar>
                <Link href="/products" className="nav-link me-2" passHref>
                    Produtos
                </Link>
                <Link href="/cart" className="nav-link" passHref>
                    Carrinho
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Header