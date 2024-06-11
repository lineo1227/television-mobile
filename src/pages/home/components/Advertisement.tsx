import bg from "@/assets/svg/zzx.svg";
export default function Advertisement() {
    return (
        <div className="home-com__advertisement">
            <img src={bg} alt="" />
            <div>
                <h1>神奇蜘蛛侠</h1>
                <p>类型: 动作 / 科幻 / 恐怖 / 奇幻 / 冒险</p>
            </div>
        </div>
    );
}
