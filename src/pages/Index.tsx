import LTabar from "../components/tabar/LTabar";
import { Outlet } from "react-router-dom";
import "../assets/style/index.scss";
export default function Index() {
    return (
        <div className="app">
            <Outlet></Outlet>
            <LTabar />
        </div>
    );
}
