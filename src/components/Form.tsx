import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// For defining the shape of the form data
// interface FieldsData {
//     name: string;
//     age: number;
// }

const schema = z.object({
    name: z.string().min(3, {message: 'Name must be at least 3 characters.'}),
    age: z.number({invalid_type_error: "Age field is required."}).min(18).positive("Negative numbers not allowed."),
});

// This will extract the interface of the form fields from Zod
type FieldsData = z.infer<typeof schema>;

export default function Form() {
    /* 
        Why we initialized useRef with null?
            - The current property referencing to a DOM node.
            - The initial value passed here will set the current property.
            - So initially when we create a ref object we don't have access to 
            a DOM node, because the DOM is created after react renders our component, so we have 
            no initial value to provide here.
            - So, after React renders the component and creates the DOM, it will set to 
            current property to a DOM node, and it will set it back to null when the node 
            is removed from thr screen  
    */

    // ** getting the value by useRef
    // const nameRef = useRef<HTMLInputElement>(null);
    // const ageRef = useRef<HTMLInputElement>(null);
    // let person = { name: "", age: 0 };

    // const handleSubmit = (e: FormEvent) => {
    //     e.preventDefault();
    //     if (nameRef.current !== null) person.name = nameRef.current.value;
    //     if (ageRef.current !== null) person.age = +ageRef.current.value;
    //     console.log(person)
    // };

    // ** getting the value by useState
    // const [person, setPerson] = useState({ name: "", age: 0 });

    // const handleSubmit = (e: FormEvent) => {
    //     e.preventDefault();
    //     console.log(person);
    // };

    const { register, handleSubmit, formState } = useForm<FieldsData>({
        resolver: zodResolver(schema),
    });

    const { errors, isValid } = formState;

    const onSubmit = (data: FieldValues) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
                <label htmlFor="name" className="from-label">
                    Name
                </label>
                <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="form-control"
                    // ref={nameRef}
                    // onChange={(e) =>
                    //     setPerson({ ...person, name: e.target.value })
                    // }
                    // value={person.name}
                />
                {errors.name && (
                    <p className="text-danger">{errors.name.message}</p>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">
                    Age
                </label>
                <input
                    {...register("age", {valueAsNumber: true})}
                    id="age"
                    type="number"
                    className="form-control"
                    // ref={ageRef}
                    // onChange={(e) =>
                    //     setPerson({ ...person, age: parseInt(e.target.value) })
                    // }
                    // value={person.age}
                />
                {errors.age && (
                    <p className="text-danger">{errors.age.message}</p>
                )}
            </div>
            <button disabled={!isValid} className="btn btn-primary">Submit</button>
        </form>
    );
}
