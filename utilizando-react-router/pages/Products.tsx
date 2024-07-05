type productBody = {
    id: number,
    name: string,
    description: string,
    price: number
}

import { Link } from "react-router-dom"
import products from "../src/database.json"

export default function Products() {
    return (
        <section>
            <h2>Todos os produtos</h2>
            <p>Confira as nossas ofertas.</p>
            <section>
                <h3>Processadores</h3>
                <ul>
                    {products.map((product: productBody) => (
                        <li key={product.id}>
                            <h4>{product.name}</h4>
                            <p>{product.price}</p>
                            <Link to={`/products/${product.id}`}>
                                <button>Ver</button>
                            </Link>
                            <button>Compras</button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    )
}