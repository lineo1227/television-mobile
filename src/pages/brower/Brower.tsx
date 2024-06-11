import LHeader from "@/components/header/LHeader";
import List from "../../components/televisionList/List";
import "./brower.scss";
export default function Brower() {
    return (
        <div className="brower">
            <LHeader link={true} />
            <div className="brower-container">
                <h4>历史观看影视</h4>
                <List list={[1, 2, 3, 4, 5, 6, 7, 8]} />
            </div>
        </div>
    );
}
