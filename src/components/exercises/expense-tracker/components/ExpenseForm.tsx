import { useEffect, useRef } from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import categories from "../categories";

const schema = z.object({
    description: z
        .string()
        .min(3, { message: "Description must be at least 3 characters." })
        .max(50),
    amount: z
        .number({ invalid_type_error: "Amount is required." })
        .min(0.01, "Amount is required!!!")
        .max(100_000),
    category: z.enum(categories, {
        errorMap: () => ({ message: "Category is required." }),
    }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (items: ExpenseFormData) => void;
}

export default function ExpenseForm({ onSubmit }: Props) {
    const descRef = useRef<HTMLInputElement>(null)
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ExpenseFormData>({
        resolver: zodResolver(schema),
    });

    useEffect(()=>{
        if(descRef) descRef.current?.focus()
        document.title='Expenses app.'
    },[])
    return (
        <form
            onSubmit={handleSubmit((data) => {
                onSubmit(data);
                reset();
            })}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">
                    Description
                </label>
                <input
                    {...register("description")}
                    ref={descRef}
                    id="description"
                    type="text"
                    className="form-control"
                    placeholder="Description"
                />
                {errors.description && (
                    <p className="text-danger">{errors.description.message}</p>
                )}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">
                    Amount
                </label>
                <input
                    {...register("amount", { valueAsNumber: true })}
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder="Amount"
                />
                {errors.amount && (
                    <p className="text-danger">{errors.amount.message}</p>
                )}
            </div>

            <div>
                <label htmlFor="category" className="form-label">
                    Category
                </label>
                <select
                    {...register("category")}
                    id="category"
                    className="form-select"
                    aria-label="Default select example"
                    defaultValue="">
                    <option value=""></option>
                    {categories.map((category) => (
                        <option value={category} key={category}>
                            {category}
                        </option>
                    ))}
                </select>
                {errors.category && (
                    <p className="text-danger">{errors.category.message}</p>
                )}
            </div>

            <button type="submit" className="btn btn-primary mt-2">
                Submit
            </button>
        </form>
    );
}
