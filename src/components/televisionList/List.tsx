import TItem from "../televisionItem/TItem";
interface Props {
    list?: number[];
}
export default function List(props: Props) {
    const { list = [1, 2, 3] } = props;
    return (
        <div className="t-list__content">
            {list.map((item) => {
                return <TItem key={item} />;
            })}
        </div>
    );
}
