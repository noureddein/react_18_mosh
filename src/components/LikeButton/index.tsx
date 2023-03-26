import { useState } from "react";

import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

// export default function index() {
//     const [liked, setLiked] = useState(false)
//     return (
//         <span onClick={() => setLiked(!liked)}>
//             {
//                 liked ? <AiFillHeart size={40} color="#ff6b81" /> :<AiOutlineHeart size={40} />
//             }
//         </span>
//     );
// }

interface Props {
    onClick: () => void;
}

export default function index({onClick}: Props) {
    const [liked, setLiked] = useState(false);

    const toggle = () => {
        setLiked(!liked);
        onClick()
    };
    if (liked)
        return <AiFillHeart size={40} color="#ff6b81" onClick={toggle} />;
    return <AiOutlineHeart size={40} onClick={toggle} />;
}
