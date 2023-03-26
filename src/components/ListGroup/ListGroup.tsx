import './ListGroup.css'
import { useState } from "react";

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

export default function ListGroup(props: ListGroupProps) {
    const { items, heading, onSelectItem } = props;
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, idx) => (
                    <li
                        key={item}
                        className={
                            selectedIndex === idx
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        onClick={() => {
                            setSelectedIndex(idx);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </>
    );
}
