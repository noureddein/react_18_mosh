import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    type?: "submit" | "reset" | "button";
    color?: // this ? mean optional
        | "primary"
        | "secondary"
        | "success"
        | "danger"
        | "warning"
        | "info"
        | "light"
        | "dark"
        | "link"
        | "close";
    onClick?: () => void;
}

export default function Button({
    children,
    type = "button",
    color = "primary",
    onClick,
}: Props) {
    return (
        <button className={`btn btn-${color}`} type={type} onClick={onClick}>
            {children}
        </button>
    );
}
