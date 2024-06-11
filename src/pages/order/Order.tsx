import List from "../../components/televisionList/List";
import LHeader from "../../components/header/LHeader";
import "./order.scss";
import Choice from "./components/Choice";
import { useState } from "react";
const controls = ["本周热播", "历史热播", "最新上线", "最受欢迎"];
export default function Order() {
    const [value, setValue] = useState(controls[0]);
    return (
        <div className="order">
            <LHeader link={true} />
            <div className="order-container">
                <Choice />
                <div className="order-container-controls">
                    {controls.map((item, index) => {
                        return (
                            <span key={index} className={value === item ? "active" : ""} onClick={() => setValue(item)}>
                                {item}
                            </span>
                        );
                    })}
                </div>
                <List list={[1, 2, 3, 4, 5]} />
            </div>
        </div>
    );
}
