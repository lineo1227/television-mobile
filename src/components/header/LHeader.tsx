import { Avatar, SearchBar } from "antd-mobile";
import "./header.scss";
export default function LHeader() {
    return (
        <div className="l-header">
            <div className="l-header__title">
                <div className="l-header__title-logo">Television</div>
                <Avatar src="" />
            </div>
            <SearchBar placeholder="猫和老鼠" />
        </div>
    );
}
