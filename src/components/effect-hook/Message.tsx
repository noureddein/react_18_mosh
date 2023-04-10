interface MessageProps {
    message: string;
    show: boolean;
    type: string;
}

const Message = ({ message, show, type }: MessageProps) => {
    return (
        <>
            {show && type === "success" && (
                <div className="alert alert-success" role="alert">
                    {message}
                </div>
            )}
            {show && type === "error" && (
                <div className="alert alert-danger" role="alert">
                    {message}
                </div>
            )}
        </>
    );
};

export default Message;
