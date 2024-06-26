import { createHashRouter } from "react-router-dom";
import Home from "@/pages/home/Home";
import Search from "@/pages/search/Search";
import Brower from "@/pages/brower/Brower";
import Order from "@/pages/order/Order";
import Index from "@/pages/Index";
import Should from "@/pages/should/Should";
import Result from "@/pages/result/Result";
import Login from "@/pages/login/Login";
const router = createHashRouter([
    {
        path: "/",
        Component: Index,
        children: [{
            path: "/",
            Component: Home
        },
        {
            path: "/should",
            Component: Should
        }, {
            path: "/brower",
            Component: Brower
        },
        {
            path: "/order",
            Component: Order
        }
        ]
    },
    {
        path: "/search",
        Component: Search,
    },
    {
        path: "/search/:id",
        Component: Result,
    },
    {
        path: "/login",
        Component: Login
    }

]);

export default router;
