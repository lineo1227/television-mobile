import LHeader from "@/components/header/LHeader";
import "./search.scss";
import TList from "@/components/televisionList/TList";
import History from "./components/History";
export default function Search() {
    return (
        <div className="search">
            <LHeader link={false} />
            <History />
            <TList title="猜你喜欢" />
        </div>
    );
}
