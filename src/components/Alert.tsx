﻿import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Alert({ children }: Props) {
    return (
        <div className="alert alert-success alert-dismissible fade show"role="alert">
            {children} 
        </div>
    );
}
