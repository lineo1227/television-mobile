import { Avatar, SearchBar } from "antd-mobile";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import { useCallback, useState } from "react";
import { LeftOutline } from "antd-mobile-icons";
interface Props {
    link: false | true;
    back?: false | true;
}
export default function LHeader(props: Props) {
    const { link, back = false } = props;
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    const pathTo = useCallback(() => {
        if (link) {
            navigate("/search");
        }
    }, []);
    const handleSearch = () => {
        navigate("/search/" + value);
    };
    const handleBack = useCallback(() => {
        navigate(-1);
    }, []);
    return (
        <div className="l-header">
            <div className="l-header__title">
                {back ? <LeftOutline onClick={handleBack} /> : <div className="l-header__title-logo">Television</div>}
                <Avatar src="" />
            </div>
            {!back && (
                <SearchBar value={value} onChange={(e: string) => setValue(e)} onFocus={pathTo} onSearch={handleSearch} placeholder="猫和老鼠" showCancelButton={() => !link} onCancel={handleBack} />
            )}
        </div>
    );
}
