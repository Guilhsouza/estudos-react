import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import { productType } from "@/services/products";
import SucessToast from "./SucessToast";

type ProductsCardProps = {
    product: productType
}

const productCard: React.FC<ProductsCardProps> = ({ product }) => {
    const [toastIsOpen, setToastIsOpen] = useState(false)
    const { id, name, imageUrl, price } = product

    return (
        <>
            <Card>
                <Link href={`/products/${id}`}>
                    <Image className="card-img-top" src={imageUrl} alt={`${name}`} height={280} width={600} />
                </Link>

                <CardBody>
                    <Link href={`/products/${id}`}>
                        <h5 className="card-title" style={{ cursor: 'pointer' }}>
                            {name}
                        </h5>
                    </Link>

                    <CardSubtitle className="mb-3 text-muted" tag="h6">
                        R$ {price}
                    </CardSubtitle>

                    <Button
                        color="dark"
                        className="pb-2"
                        block
                        onClick={() => {
                            setToastIsOpen(true)
                            setTimeout(() => setToastIsOpen(false), 1000 * 3)
                        }}
                    >
                        Adicionar ao Carrinho
                    </Button>
                </CardBody>
            </Card >

            <SucessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
        </>
    )
}

export default productCard;