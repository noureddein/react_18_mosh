interface Expense {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expense[];
    onDelete: (id: number) => void;
}

export default function ExpenseList({ expenses, onDelete }: Props) {
    if(expenses.length === 0) return null
    
    return (
        <div className="mt-4">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map(({ id, description, amount, category }) => (
                        <tr key={id}>
                            <td scope="row">{description}</td>
                            <td>{amount}</td>
                            <td>{category}</td>
                            <td>
                                <button
                                    className="btn btn-outline-danger"
                                    onClick={() => onDelete(id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Total</th>
                        <th>
                            ${expenses.reduce(
                                (acc, { amount }) => amount + acc,
                                0
                            ).toFixed(2)}
                        </th>
                        <td></td>
                        <td></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}
