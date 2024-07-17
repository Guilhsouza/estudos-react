require('dotenv').config()
import { GetStaticProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface apiResponse {
    name: string,
    timestamp: Date
}

export const getStaticProps: GetStaticProps = async () => {
    const staticData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`).then(res => res.json())
    console.log(staticData);

    return {
        props: {
            staticData
        },
        revalidate: 3
    }
}

const Static: NextPage = (props: {
    children?: ReactNode
    staticData?: apiResponse
}) => {
    const [clientSideData, setClientSideData] = useState<apiResponse>()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('/api/hello').then(res => res.json())

        setClientSideData(data)

    }

    return (
        <Container tag='main' className=" w-50">
            <h1 className="my-5">Como funcionam as renderizações Next.js</h1>

            <Row>
                <Col>
                    <h3>
                        Gerado estaticamente durante o build:
                    </h3>
                    <h2>
                        {props.staticData?.timestamp.toString()}
                    </h2>
                </Col>

                <Col>
                    <h3>Gerado no cliente</h3>
                    <h2>
                        {clientSideData?.timestamp.toString()}
                    </h2>
                </Col>
            </Row>
        </Container>
    )
}

export default Static