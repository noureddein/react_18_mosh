import React from "react";
import { useState } from "react";

interface Props {
    children: string;
    maxChar: number;
}

export default function index({ children, maxChar }: Props) {
    const [showFullText, setShowFullText] = useState(false);
    const fullText = showFullText ? children.length : maxChar;
    
    const handleShowText = () => setShowFullText(!showFullText);

    return (
        <div>
            {children.substring(0, fullText)}
            <button onClick={handleShowText}>
                {showFullText ? "Less" : "More"}
            </button>
        </div>
    );
}
