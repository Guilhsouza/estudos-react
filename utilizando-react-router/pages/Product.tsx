import { Link, useParams } from 'react-router-dom'
import products from '../src/database.json'

export default function Product() {
    const { productId } = useParams()

    const product = products.find((product: { id: number | string }) => (product.id === +productId!))

    if (!product) {
        return (
            <>
                <h2>404 Not Found</h2>
                <h4>Infelizmente o produto não foi encontrado...</h4>
                <Link to='/products'><button>Voltar</button></Link>
            </>
        )
    }

    return (
        <section>
            <Link to='/products'><button>Voltar</button></Link>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>R$ {product.price}</p>
            <button>Comprar</button>
        </section>
    )
}