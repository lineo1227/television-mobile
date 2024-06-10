import TList from "@/components/televisionList/TList";
import LHeader from "../../components/header/LHeader";
import Advertisement from "./components/Advertisement";
import "./home.scss";
import Recommend from "../../components/recommend/Recommend";
export default function Home() {
    return (
        <div className="home">
            <LHeader />
            <Advertisement />
            <TList title="最近更新" />
            <TList title="正在热播" />
            <Recommend title="每周更新" desc="每个星期天更新哦" list={[1, 2, 3]} />
            <TList title="电影推荐" />
            <TList title="动漫推荐" />
        </div>
    );
}
