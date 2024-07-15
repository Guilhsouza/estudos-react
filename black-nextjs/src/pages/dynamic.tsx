require('dotenv').config()
import { GetServerSideProps, NextPage } from "next";
import { ReactNode, useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";

interface apiResponse {
    name: string,
    timestamp: Date
}

export const getServerSideProps: GetServerSideProps = async () => {
    const serverSideData: apiResponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/hello`).then(res => res.json())

    return {
        props: {
            serverSideData
        }
    }
}

const Dynamic: NextPage = (props: {
    children?: ReactNode
    serverSideData?: apiResponse
}) => {
    const [clientSideData, setClienteSideData] = useState<apiResponse>()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('/api/hello').then(res => res.json())

        setClienteSideData(data)

    }

    return (
        <Container tag='main' className=" w-50">
            <h1 className="my-5">Como funcionam as renderizações Next.js</h1>

            <Row>
                <Col>
                    <h3>
                        Gerado No servidor
                    </h3>
                    <h2>
                        {props.serverSideData?.timestamp.toString()}
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

export default Dynamic