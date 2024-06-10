import "./t-list.scss";
import TItem from "../televisionItem/TItem";
interface Props {
    title: string;
}
function TList(props: Props) {
    return (
        <div className="t-list">
            <div className="t-list__title">
                <h3>{props.title}</h3>
                <span>更多</span>
            </div>
            <div className="t-list__content">
                <TItem />
                <TItem />
                <TItem />
            </div>
        </div>
    );
}
export default TList;
