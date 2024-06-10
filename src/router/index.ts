import { createHashRouter } from "react-router-dom";
import Home from "@/pages/home/Home";
import Search from "@/pages/search/Search";
import Brower from "@/pages/brower/Brower";
import Order from "@/pages/order/Order";
import Index from "@/pages/Index";
const router = createHashRouter([
    {
        path: "/",
        Component: Index,
        children: [{
            path: "/",
            Component: Home
        },
        {
            path: "/search",
            Component: Search
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

]);

export default router;
