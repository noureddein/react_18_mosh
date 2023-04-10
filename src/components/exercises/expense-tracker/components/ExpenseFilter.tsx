import categories from "../categories";


interface Props {
    onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: Props) {
    return (
        <div className="my-3">
            <select
                className="form-select"
                onChange={(event) => onSelectCategory(event.target.value)}
                defaultValue="">
                <option value="">All categories</option>
                {categories.map((category) => (
                    <option value={category} key={category}>{category}</option>
                ))}
            </select>
        </div>
    );
}

export default ExpenseFilter;
