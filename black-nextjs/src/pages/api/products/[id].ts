import { NextApiRequest, NextApiResponse } from "next";
import products from '../../../../database.json'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query

    const product = products.filter((prod) => (Number(id) === prod.id))
    res.status(200).json(product)
} 