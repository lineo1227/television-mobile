import { useState } from "react";

export default function Choice() {
    const [list, setList] = useState([
        {
            name: "分类",
            check: "电影",
            list: ["电影", "动漫", "儿童"],
        },
        {
            name: "资费",
            check: "全部",
            list: ["全部", "免费", "会员"],
        },
        {
            name: "类型",
            check: "全部",
            list: ["全部", "动漫", "儿童"],
        },
        {
            name: "年代",
            check: "全部",
            list: ["全部", "2023", "2022", "2021", "2020", "更早"],
        },
        {
            name: "地区",
            check: "全部",
            list: ["全部", "内地", "欧美", "港台", "日本", "韩国", "其他"],
        },
    ]);
    const handleClick = (obj: string, it: string) => {
        setList(
            list.map((item) => {
                if (item.name === obj) {
                    item.check = it;
                }
                return item;
            })
        );
    };
    return (
        <div className="choice">
            <div className="choice-container">
                <ul className="choice-list">
                    {list.map((item) => (
                        <li key={item.name}>
                            <span>{item.name}</span>
                            <ul>
                                {item.list.map((it) => (
                                    <li className={it === item.check ? "active" : ""} onClick={() => handleClick(item.name, it)} key={it}>
                                        {it}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
