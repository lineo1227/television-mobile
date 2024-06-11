import LHeader from "@/components/header/LHeader";
import "./should.scss";
import { TextArea } from "antd-mobile";
import { useState } from "react";
export default function Should() {
    const [value, setValue] = useState("");
    return (
        <div className="should">
            <LHeader link={true} back={true} />
            <div className="should-container">
                <h2>把想看的影视留言</h2>
                <p>xx影视，给你最好的体验！</p>
                <TextArea
                    placeholder="请输入内容"
                    value={value}
                    onChange={(val) => {
                        setValue(val);
                    }}
                />
                <button>点击提交</button>
            </div>
        </div>
    );
}
