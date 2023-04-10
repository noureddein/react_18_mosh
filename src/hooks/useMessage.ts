import { useEffect, useState } from "react";
import Message from "../components/effect-hook/Message";


export default function useMessage() {
    const [showMsg, setShowMsg] = useState({
        show: false,
        message: "",
        type: "",
    });

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;
        if (showMsg.show) {
            interval = setInterval(
                () =>
                    setShowMsg({
                        ...showMsg,
                        show: false,
                        message: "",
                        type: "",
                    }),
                4000
            );
        }

        return () => clearInterval(interval);
    }, [showMsg.show]);
    return { showMsg, setShowMsg };
}

export { Message };
