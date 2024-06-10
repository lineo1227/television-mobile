import React from "react";
import { DeleteOutline } from "antd-mobile-icons";
export default function History() {
    return (
        <div className="history">
            <div className="history-title">
                <h3>最新搜索</h3>
                <DeleteOutline />
            </div>
            <div className="history-content">
                <span>xxx</span>
                <span>xxx</span>
                <span>xxxxxxxxxxxxx</span>
                <span>xxx</span>
                <span>xxx</span>
                <span>xxx</span>
                <span>xxx</span>
            </div>
        </div>
    );
}
