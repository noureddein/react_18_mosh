import { useState } from "react";

export default function Bugs() {
    // This example explain how to use immer for updating array of objects
    const [bugs, setBugs] = useState([
        { id: 1, title: "Bug 1", isFixed: false },
        { id: 2, title: "Bug 2", isFixed: false },
    ]);

    const handleClick = (id: Number) => {
        // ** Update
        setBugs(
            bugs.map((bug) => (bug.id === id ? { ...bug, isFixed: true } : bug))
        );

        // ** Update using Immer
        // setBugs(
        //     produce((draft) => {
        //         const bug = draft.find((bug) => bug.id === id);
        //         if (bug) bug.isFixed = true;
        //     })
        // );
    };

    return (
        <div>
            {bugs.map(({ id, title, isFixed }) => (
                <div key={id}>
                    <span>
                        {title} {isFixed ? "Fixed" : "New"}
                    </span>
                    <button onClick={() => handleClick(id)}>Click</button>
                </div>
            ))}
        </div>
    );
}