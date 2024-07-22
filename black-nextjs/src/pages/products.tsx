import Header from "@/components/Header";
import ProductsList from "@/components/ProductsLists";
import { fetchProducts, productType } from "@/services/products";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { ReactNode } from "react";
import { Container } from "reactstrap";

export const getStaticProps: GetStaticProps = async () => {
    const products = await fetchProducts()

    return {
        props: {
            products
        }
    }
}

const Products: NextPage = (props: {
    children?: ReactNode
    products?: productType[]
}) => {
    return (
        <>
            <Head>
                <title>Nossos produtos</title>
                <meta name="description" content="conheça os nossos produtos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <Container className="mb-5">
                    <h1 className="my-5">
                        Nossos Produtos
                    </h1>

                    <ProductsList products={props.products!} />
                </Container>
            </main>
        </>
    )
}

export default Products