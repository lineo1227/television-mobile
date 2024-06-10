import LHeader from "../../components/header/LHeader";
import "./result.scss";

import List from "../../components/televisionList/List";
import { useParams } from "react-router-dom";
export default function Result() {
    const param = useParams();
    return (
        <div className="result">
            <LHeader link={false} back={true} />
            <div className="result-container">
                <h4>与{param.id}相关的影片</h4>
                <List />
            </div>
        </div>
    );
}
