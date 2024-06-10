import "./t-list.scss";
import List from "./List";
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
            <List />
        </div>
    );
}
export default TList;
