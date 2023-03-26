import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

const ListItem = styled.li<ListItemProps>`
    padding: 5px 0;
    margin-left: 10px;
    background: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

interface ListItemProps {
    active: boolean;
}

export default function ListGroup(props: ListGroupProps) {
    const { items, heading, onSelectItem } = props;
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1>{heading}</h1>
            <List>
                {items.map((item, idx) => (
                    <ListItem
                    active={selectedIndex === idx}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(idx);
                            // onSelectItem(item);
                        }}>
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    );
}
