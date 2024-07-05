import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../pages/RootLayout"
import Products from "../pages/Products";
import Product from "../pages/Product"
import Cart from "../pages/Cart";
import AdminHome from "../pages/admin/AdminHome";

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
                element: <Products />
            },
            {
                path: "products/:productId",
                element: <Product />
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