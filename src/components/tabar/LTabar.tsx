import { TabBar } from "antd-mobile";
import { AppOutline, MessageOutline, AppstoreOutline, BankcardOutline } from "antd-mobile-icons";
import { useNavigate, useLocation } from "react-router-dom";
import "./tabar.scss";
const tabs = [
    {
        key: "/",
        title: "首页",
        icon: <AppOutline />,
    },
    {
        key: "/order",
        title: "分类",
        icon: <AppstoreOutline />,
    },
    {
        key: "/brower",
        title: "历史",
        icon: <BankcardOutline />,
    },
    {
        key: "/should",
        title: "求片",
        icon: <MessageOutline />,
    },
];
export default function LTabar() {
    const navigate = useNavigate();
    const location = useLocation();
    const setRouteActive = (url: string) => {
        navigate(url);
    };
    return (
        <TabBar className="l-tabar" activeKey={location.pathname} onChange={(value) => setRouteActive(value)}>
            {tabs.map((item) => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    );
}
