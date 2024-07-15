import { NextPage } from "next";
import Head from "next/head";

const cart: NextPage = () => {
    return (
        <>
            <Head>
                <title>Nossos produtos</title>
                <meta name="description" content="conheça os nossos produtos" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>
                Carrinho
            </h1>
        </>
    )
}

export default cart