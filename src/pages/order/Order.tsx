import List from "../../components/televisionList/List";
import LHeader from "../../components/header/LHeader";
import "./order.scss";
export default function Order() {
    return (
        <div className="order">
            <LHeader link={true} />
            <div className="order-container">
                <List />
            </div>
        </div>
    );
}
