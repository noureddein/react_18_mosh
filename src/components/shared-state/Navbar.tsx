import React from "react";

interface Props {
    cartItemsCount: Number;
}

type DivProps = {
    children: React.ReactNode;
};

function Div(props: DivProps) {
    return <div>{props.children}</div>;
}

export default function Navbar({ cartItemsCount }: Props) {
    return (
        <Div>
            <>Navbar: {cartItemsCount}</>
        </Div>
    );
}
