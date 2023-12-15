import Chat from "./Chat";
import ChatFooter from "./ChatFooter";
import PropTypes from "prop-types";

const ChatBox = ({ messages, msgEnd, value, handleChange, handleSend, handleEnter }) => {
    return (
        <div className="chatBox flex flex-col w-9/12 max-md:w-8/12 px-8 pt-8 pb-1 max-md:p-6 bg-[#f1f0f3]">
            <Chat messages={messages} msgEnd={msgEnd}/>
            <ChatFooter
                value={value}
                handleChange={handleChange}
                handleSend={handleSend}
                handleEnter={handleEnter}
            />
        </div>
    )
}

ChatFooter.propTypes = {
    messages: PropTypes.array,
    msgEnd: PropTypes.object,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSend: PropTypes.func,
    handleEnter: PropTypes.func,
};

export default ChatBox