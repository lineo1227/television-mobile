import bg from "@/assets/svg/zzx.svg";
import { useState } from "react";
export default function Advertisement() {
    const [num, setNum] = useState(0);
    console.log(num);
    return (
        <div className="home-com__advertisement">
            <img src={bg} alt="" />
            <div>
                <h1 onClick={() => setNum(num + 1)}>神奇蜘蛛侠</h1>
                <p>类型: 动作 / 科幻 / 恐怖 / 奇幻 / 冒险</p>
            </div>
        </div>
    );
}
