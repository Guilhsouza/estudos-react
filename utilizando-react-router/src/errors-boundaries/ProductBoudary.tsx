import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function productBoundary() {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        switch (error.status) {
            case 404:
                return <h2>Opa... o produto não foi encontrado</h2>
            case 500:
                return <h2>Erro interno no servidor.</h2>
        }
    }

    return <h2>Ocorreu algo inesperado :(</h2>
}