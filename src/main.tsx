import ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import "./assets/style/style.css";
import resizeListener from "./utils/resize";
window.addEventListener("resize", resizeListener);
resizeListener();
ReactDOM.createRoot(document.getElementById("root")!).render(<RouterProvider router={router}></RouterProvider>);
