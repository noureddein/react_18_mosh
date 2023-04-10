import React, { useId } from "react";

type CartItem = {
    id: number;
    title: string;
};

interface Props {
    cartItems: CartItem[];
    onAdd: () => void;
    onDelete: (id: Number) => void;
    onClear: () => void;
}

export default function Cart({ cartItems, onAdd, onDelete, onClear }: Props) {
    return (
        <div>
            {cartItems.map(({ id, title }) => (
                <div key={id} style={{ display: "flex" }}>
                    <p>{title}</p>
                    <button onClick={() => onDelete(id)}>X</button>
                </div>
            ))}
            <button onClick={onAdd}>Add item</button>
            <button onClick={onClear}>Clear cart</button>
        </div>
    );
}
