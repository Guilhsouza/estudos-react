import { useState } from 'react'

interface Coment {
    email: string;
    coment: string;
}

interface useComentsCollectionReturn {
    comentsList: Coment[];
    addComent: (email: string, coment: string) => void;
}

export default function useComentsCollection(): useComentsCollectionReturn {
    const [comentsList, setComentsList] = useState<Coment[]>(() => { return [] })

    const addComent = (email: string, coment: string) => {
        const comentBody = { email, coment }
        setComentsList((state) => {
            const newComentList = [...state, comentBody]
            return newComentList
        })
    }

    return { comentsList, addComent }
}