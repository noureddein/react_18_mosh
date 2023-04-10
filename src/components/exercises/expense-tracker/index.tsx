import { useState } from "react";

import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";

type itemsType = {
    description: string;
    amount: number;
    category: string;
};

export default function index() {
    const [selectedCategory, setSelectedCategory] = useState("");
    const [expenses, setExpenses] = useState([
        {
            id: 1,
            description: "Milk",
            amount: 15,
            category: "Groceries",
        },
        {
            id: 2,
            description: "Lemon",
            amount: 5,
            category: "Utilities",
        },
    ]);

    const handleAdd = (expense: itemsType) =>
        setExpenses([...expenses, { ...expense, id: expenses.length + 1 }]);

    const onDelete = (id: number) =>
        setExpenses(expenses.filter((item) => item.id != id));

    const visibleExpenses = selectedCategory
        ? expenses.filter((e) => e.category === selectedCategory)
        : expenses;

    return (
        <div>
            <ExpenseForm onSubmit={handleAdd} />
            <ExpenseFilter
                onSelectCategory={(category) => setSelectedCategory(category)}
            />
            <ExpenseList expenses={visibleExpenses} onDelete={onDelete} />
        </div>
    );
}
