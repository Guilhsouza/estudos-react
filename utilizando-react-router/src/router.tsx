import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../pages/RootLayout"
import Products from "../pages/Products";
import Product from "../pages/Product"
import Cart from "../pages/Cart";
import AdminHome from "../pages/admin/AdminHome";
import loadProduct from "./loaders/products";
import ProductBoundary from "./errors-boundaries/ProductBoudary";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "products/:productId",
                element: <Product />,
                loader: loadProduct,
                errorElement: <ProductBoundary />
            },
            {
                path: "cart",
                element: <Cart />
            },
        ]
    },
    {
        path: "/admin",
        element: <AdminHome />
    }
]);

export default router