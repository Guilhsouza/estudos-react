export type productType = {
    id: number
    name: string
    description: string
    price: number
    imageUrl: string
    inStock: number
}

export const fetchProducts = async () => {
    const products: productType[] = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products`).then((res) => res.json())
    return products
}

export const fetchProduct = async (id: string | number) => {
    const product: productType = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/products/${id}`).then((res) => res.json())
    return product
}