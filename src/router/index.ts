import { createHashRouter } from "react-router-dom";
import App from "../pages/App.tsx";

const router = createHashRouter([
    {
        path: "/",
        Component: App
    },
]);

export default router;
