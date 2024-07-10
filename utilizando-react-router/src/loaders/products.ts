import { LoaderFunctionArgs } from 'react-router-dom'
import products from '../database.json'

export default function loadProduct({ params }: LoaderFunctionArgs) {
    const product = products.find((product: { id: number | string }) => (product.id === +params.productId!))

    if (!product) {
        throw new Response("404 Not Found", { status: 404 })
    }

    return product
}