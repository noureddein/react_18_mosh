import { useState, useId } from "react";

import Navbar from "./Navbar";
import Cart from "./Cart";

type CartItem = {
    id: number;
    title: string;
};

export default function index() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    const handleAdd = () => {
        setCartItems((prev) => {
            let id = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
            return [...prev, { id, title: `Product ${id}` }];
        });
    };

    const handleClearCart=()=> setCartItems([])

    const handleDelete = (id: Number) =>
        setCartItems(cartItems.filter((item) => item.id !== id));
    return (
        <div>
            <Navbar cartItemsCount={cartItems.length} />
            <Cart cartItems={cartItems} onAdd={handleAdd} onDelete={handleDelete} onClear={handleClearCart}/>
        </div>
    );
}
