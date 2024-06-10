import "./t-item.scss";
import { Image } from "antd-mobile";
import testPng from "@/assets/images/test.png";
function TItem() {
    return (
        <div className="t-item">
            <div className="t-item-container">
                <Image src={testPng} width={"96rem"} height={"138rem"} fit="cover" />
                <p>巨齿鲨2：深渊</p>
                <span>49亿票房燃爆国漫</span>
            </div>
        </div>
    );
}
export default TItem;
