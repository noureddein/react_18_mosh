import { useState } from "react";

import produce from "immer";

import Button from "./components/exercises/Button";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroupCssInJs";
import LikeButton from "./components/LikeButton";
import Message from "./components/Message";
import Bugs from "./components/Bugs";
import SharedState from "./components/shared-state";
import ExpandableText from "./components/exercises/expandable-text";
import Form from "./components/Form";
import ExpenseTracker from './components/exercises/expense-tracker'
import EffectHook from './components/effect-hook'

export default function App() {
    const [show, setShow] = useState(false);

    return (
        <div>
            {/* {show && (
                <Alert>
                    Clicked
                    <Button color="close" onClick={() => setShow(false)} />
                </Alert>
            )} */}
            {/* <Button onClick={() => setShow(true)}>
                Alert <strong>works</strong>
            </Button> */}

            {/* <ListGroup
                heading="Miami"
                items={["New your", "Los Angeles", "San Francisco"]}
                onSelectItem={() => {}}
            /> */}
            {/* <LikeButton onClick={() => console.log("Clicked")} />
            <Message />
            <Message />
            <Message /> */}

            {/* <Bugs /> */}
            {/* <SharedState /> */}
            {/* <ExpandableText maxChar={100}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tempore, molestiae commodi voluptatibus saepe, nostrum et
                dolores eum, nam reiciendis cum modi ratione fugiat voluptatum.
                Natus vero doloremque voluptatibus esse dolor. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Est sit laboriosam dicta
                velit soluta exercitationem repellendus vel doloribus, sed
                similique asperiores rerum aliquam, non quisquam dolorum quaerat
                quasi minima? Officia!
            </ExpandableText> */}
            {/* <Form/> */}
            {/* <ExpenseTracker /> */}
            <EffectHook />
        </div>
    );
}
