import { useState } from "react";

import Button from "./components/exercises/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";

export default function App() {
    const [show, setShow] = useState(false);

    return (
        <div>
            {show && (
                <Alert>
                    Clicked
                    <Button color="close" onClick={() => setShow(false)} />
                </Alert>
            )}
            <Button onClick={() => setShow(true)}>
                Alert <strong>works</strong>
            </Button>

            <ListGroup
                heading="Miami"
                items={["New your", "Los Angeles", "San Francisco"]}
                onSelectItem={()=> {}}
            />
        </div>
    );
}
