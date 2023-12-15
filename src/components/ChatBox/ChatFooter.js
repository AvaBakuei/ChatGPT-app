import PropTypes from "prop-types";
import sendImg from '../../assets/images/send.png';

const ChatFooter = ({ value, handleChange, handleSend, handleEnter }) => {
    const onChange = (e) => {
        handleChange(e.target.value);
    }
    return (
        <div className="chatFooter flex flex-col items-center justify-center h-1/4">
            <div className="ChatInput flex w-full p-3.5 rounded-[0.75rem] bg-white">
                <input
                    className="w-full text-[#1b0036] text-base max-sm:text-sm outline-none placeholder:text-[#8d7a97]"
                    type="text" placeholder="Message ChatGPT..."
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleEnter}
                />
                <button
                    className="send" onClick={handleSend}>
                    <img className="w-6 h-6" src={sendImg} alt="Send Img" />
                </button>
            </div>
            <p className="my-4 text-xs text-[#8d7a97] font-semibold max-sm:text-[10px]">
                ChatGPT can make mistakes. Consider checking important information.
            </p>
        </div>
    )
}

ChatFooter.propTypes = {
    value: PropTypes.string,
    handleChange: PropTypes.func,
    handleSend: PropTypes.func,
    handleEnter: PropTypes.func,
};


export default ChatFooter
