import { Avatar, SearchBar } from "antd-mobile";
import "./header.scss";
import { useNavigate } from "react-router-dom";
interface Props {
    link: false | true;
}
export default function LHeader(props: Props) {
    const { link } = props;
    const navigate = useNavigate();
    const pathTo = () => {
        if (link) {
            navigate("/search");
        }
    };
    return (
        <div className="l-header">
            <div className="l-header__title">
                <div className="l-header__title-logo">Television</div>
                <Avatar src="" />
            </div>
            <SearchBar onFocus={pathTo} placeholder="猫和老鼠" showCancelButton={() => !link} onCancel={() => navigate("/")} />
        </div>
    );
}
