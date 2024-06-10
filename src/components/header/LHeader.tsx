import { Avatar, SearchBar } from "antd-mobile";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { LeftOutline } from "antd-mobile-icons";
interface Props {
    link: false | true;
    back?: false | true;
}
export default function LHeader(props: Props) {
    const { link, back = false } = props;
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const pathTo = () => {
        if (link) {
            navigate("/search");
        }
    };
    const handleSearch = () => {
        navigate("/search/" + value);
    };
    return (
        <div className="l-header">
            <div className="l-header__title">
                {back ? <LeftOutline onClick={() => navigate(-1)} /> : <div className="l-header__title-logo">Television</div>}
                <Avatar src="" />
            </div>
            {!back && (
                <SearchBar
                    value={value}
                    onChange={(e: string) => setValue(e)}
                    onFocus={pathTo}
                    onSearch={handleSearch}
                    placeholder="猫和老鼠"
                    showCancelButton={() => !link}
                    onCancel={() => navigate("/")}
                />
            )}
        </div>
    );
}
