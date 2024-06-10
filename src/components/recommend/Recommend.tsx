import "./recommend.scss";
import binge from "@/assets/images/binge-watch.png";
import bingeItem from "@/assets/images/binge-watch-item.png";
import { Image } from "antd-mobile";
interface Props {
    title: string;
    desc: string;
    list: any[];
}
export default function Recommend(props: Props) {
    return (
        <div className="recommend">
            <img src={binge} alt="" />
            <div className="recommend-container">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
                <ul>
                    {props.list.map((item) => {
                        return (
                            <li key={item}>
                                <Image src={bingeItem} width={"100%"} height={"58rem"} fit="cover" />
                                <span>请叫我总监</span>
                                <span>新旧许文强再战上</span>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
